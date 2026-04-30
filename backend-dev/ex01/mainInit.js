import { Duration } from "./model/Duration.js";
import { RaceResult } from "./model/RaceResult.js";
import { RaceResults } from "./service/RaceScoresService.js";
// Initialize RaceResults
const raceManager = new RaceResults();
raceManager.addRaceResult(new RaceResult("participant1", "swim", Duration.fromMinutesAndSeconds(2, 30)));
raceManager.addRaceResult(new RaceResult("participant1", "run", Duration.fromMinutesAndSeconds(1, 45)));
raceManager.addRaceResult(new RaceResult("participant2", "swim", Duration.fromMinutesAndSeconds(3, 15)));
// Save results to file
raceManager.saveToFile("./backend-dev/ex01/data/raceScores.json");