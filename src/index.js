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
}

const date = new DateIt();

console.log( date.date )  // 4   - Date
console.log( date.year )  // 2023 - Full year
console.log( date.yr )    // 23   - Short year
console.log( date.month ) // July - Full month
console.log( date.mon )   // Jul  - Short month
console.log( date.day )   // Tuesday - Full day
console.log( date.dy )    // Tue  - Short day
console.log( date.hours ) // 18   - Hour
console.log( date.mins )  // 6    - Minutes
console.log( date.secs )  // 5    - Seconds