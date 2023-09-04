const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


class DateIt {
    constructor(...args) {
        this._date = new Date(...args)
    }

    get date() {
        return this._date.getDate();
    }

    get year() {
        return this._date.getFullYear();
    }

    get yr() {
        return this._date.getFullYear() % 100;
    }

    get month() {
        return months[this._date.getMonth()];
    }

    get mon() {
        return months[this._date.getMonth()].slice(0, 3);
    }

    get day() {
        return days[this._date.getDay()];
    }

    get dy() {
        return days[this._date.getDay()].slice(0, 3);
    }

    get hours() {
        return this._date.getHours();
    }

    get mins() {
        return this._date.getMinutes();
    }

    get secs() {
        return this._date.getSeconds();
    }

    when() {
        const now = new Date();
        const diff = Math.floor(this._date - now);
        const absoluteDiff = Math.abs(diff);
        
        const times = [
            { unit: 'year', ms: 31536000000 },
            { unit: 'month', ms: 2592000000 },
            { unit: 'day', ms: 86400000 },
            { unit: 'hour', ms: 3600000 },
            { unit: 'minute', ms: 60000 },
            { unit: 'second', ms: 1000 },
        ];

        diff === 0 ? 'today' : false;

        for (const time of times) {
            if (absoluteDiff > time.ms) {
                const count = Math.floor(absoluteDiff / time.ms);
                return `${count} ${time.unit}${count > 1 ? 's' : ''} ${diff < 0 ? 'ago' : 'from now'}`;
            } else if (diff === 0) {
                return 'today';
            }
        }
    }

    format(mask = 'Y M D') {
        const formatDate = mask.split('').map((item) => {
            switch (item) {
                case 'Y':
                    return this.year;
                case 'y':
                    return this.yr;
                case 'M':
                    return this.month;
                case 'm':
                    return this.mon;
                case 'D':
                    return this.date.toString().padStart(2, '0');
                case 'd':
                    return this.date;
                case 'H':
                    return this.hours.toString().padStart(2, '0');
                case 'h':
                    return this.hours;
                case 'I':
                    return this.mins.toString().padStart(2, '0');
                case 'i':
                    return this.mins;
                case 'S':
                    return this.secs.toString().padStart(2, '0');
                case 's':
                    return this.secs;
                default:
                    return item;
            }
        }).join('');
        return formatDate;
    }
}
