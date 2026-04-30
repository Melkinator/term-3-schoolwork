class Duration {
    _totalSeconds;
    constructor(seconds) {
        // YOUR CODE
        this._totalSeconds = seconds;
    }

    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
        // YOUR CODE
        const totalSeconds = (minutes*60)+seconds;
        return new Duration(totalSeconds);
    }

    toString = () => {
        // YOUR CODE
        let minutes = parseInt(this._totalSeconds/60);
        let seconds = this._totalSeconds%60;

        return minutes+"m "+seconds+"s";
    }

    plus = (other) => {
        this._totalSeconds += other._totalSeconds;
    }

    minus = (other) => {
        this._totalSeconds -= other._totalSeconds;
    }
}

export { Duration };