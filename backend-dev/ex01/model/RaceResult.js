class RaceResult {
    /** @type {string} */
    participantId;
    /** @type {string} */
    sport;
    /** @type {Duration} */
    duration;

    /**
     * @param {string} participantId 
     * @param {string} sport 
     * @param {Duration} time 
     */
    constructor(participantId, sport, duration) {
        this.participantId = participantId;
        this.sport = sport;
        this.duration = duration;
    }
}

export { RaceResult };