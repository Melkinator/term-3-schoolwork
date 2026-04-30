import { Duration } from './model/Duration.js';
import { RaceResults } from './service/RaceScoresService.js';
// Load results from file
const raceManager = new RaceResults();
raceManager.loadFromFile('./backend-dev/ex01/data/raceScores.json');
// Retrieve time for a participant and sport
const time1 = raceManager.getTimeForParticipant('participant1', 'swim');
console.log(time1.toString()); // "2m 30s"
// Compute total time for a participant
const totalTime1 = raceManager.getTotalTimeForParticipant('participant1');
console.log(totalTime1.toString()); // "4m 15s"