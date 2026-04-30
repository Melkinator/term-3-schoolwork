class RaceResult {
    /** @type {string} */
    participantId;
    /** @type {string} */
    sport;
    /** @type {Duration} */
    duration;

    constructor(participantId, sport, duration) {
        this.participantId = participantId;
        this.sport = sport;
        this.duration = duration;
    }
}

export { RaceResult };