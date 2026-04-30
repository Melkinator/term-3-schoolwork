import fs from 'fs';
import { Duration } from '../model/Duration.js';

export class RaceResults {
    constructor() {
        this._results=[];
    }

    /**
    * Adds a new race result to the race list.
    * @param {RaceResult} result - The race result to add.
    */
    addRaceResult(raceResult) {
        this._results.push(raceResult);
    }

    /**
    * Saves the race results list to a JSON file.
    * @param {string} filePath - The path to the file data should be saved.
    */
    saveToFile(filePath) {
        const data = JSON.stringify(this._results, null, 2);
        fs.writeFileSync(filePath, data, 'utf-8');
    }

    /**
    * Loads the race results list from a JSON file.
    * @param {string} filePath - The path to the file to load data from.
    * @returns {boolean} True if loading was successful, false otherwise.
    */
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

    /**
    * Retrieves the race time for a given participant and sport.
    * @param {string} participantId - Participant ID.
    * @param {string} sport - Sport name.
    * @returns {Duration|null} Duration if found, else null.
    */
    getTimeForParticipant(participantId, sport) {
        const result = this._results.find(r => r.participantId === participantId && r.sport === sport);
        return result ? new Duration(result.duration._totalSeconds) : null;
    }

    /**
    * Computes total time for a given participant by summing their race times.
    * @param {string} participant_id - The ID of the participant.
    * @returns {Duration} The total Duration object
    */
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