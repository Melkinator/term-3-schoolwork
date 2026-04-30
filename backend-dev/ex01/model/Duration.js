class Duration {
    /**
     * Total duration in seconds.
     * @type {number}
     * @private
    */
    _totalSeconds;

    /**
     * Creates a new Duration object.
     * @param {number} seconds - The number of seconds.
     */
    constructor(seconds) {
        // YOUR CODE
        this._totalSeconds = seconds;
    }

    /**
     * Creates a new Duration from minutes and seconds.
     * @param {number} [minutes=0]
     * @param {number} [seconds=0]
     * @returns {Duration} A new Duration instance.
     */
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
        // YOUR CODE
        const totalSeconds = (minutes*60)+seconds;
        return new Duration(totalSeconds);
    }

    /**
     * Converts the duration into a human-readable string, e.g., "2m 30s".
     * @returns {string} the formatted duration string.
     */
    toString = () => {
        // YOUR CODE
        let minutes = parseInt(this._totalSeconds/60);
        let seconds = this._totalSeconds%60;

        return minutes+"m "+seconds+"s";
    }

    /**
     * Returns a new Duration by adding another duration.
     * @param {Duration} other Another duration to add.
     * @returns {Duration} A new Duration representing the sum.
     */
    plus = (other) => {
        this._totalSeconds += other._totalSeconds;
    }

    /**
     * Returns a new Duration by subtracting another duration.
     * @param {Duration} other Another duration to subtract.
     * @returns {Duration} A new Duration representing the difference.
     */
    minus = (other) => {
        this._totalSeconds -= other._totalSeconds;
    }
}

export { Duration };