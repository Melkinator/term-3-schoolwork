import fs from 'fs';
import { Duration } from '../model/Duration.js';

export class RaceResults {
    constructor() {
        this._results=[];
    }

    addRaceResult(raceResult) {
        this._results.push(raceResult);
    }

    saveToFile(filePath) {
        const data = JSON.stringify(this._results, null, 2);
        fs.writeFileSync(filePath, data, 'utf-8');
    }

    loadFromFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            this._results = JSON.parse(data);
            return true;
        } catch (err) {
            console.error("Error loading file:", err);
            return false;
        }
    }

    getTimeForParticipant(participantId, sport) {
        const result = this._results.find(r => r.participantId === participantId && r.sport === sport);
        return result ? new Duration(result.duration._totalSeconds) : null;
    }

    getTotalTimeForParticipant(participantId) {
        const participantResults = this._results.filter(r => r.participantId === participantId);
        let total = new Duration(0);
        participantResults.forEach(r => {
            const d = new Duration(r.duration._totalSeconds);
            total.plus(d);
        });
        return total;
    }
}