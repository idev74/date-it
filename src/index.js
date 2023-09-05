const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Represents a class for working with JS dates.
 */
class DateIt {
  /**
     * Create a new DateIt instance with the provided date arguments.
     * @param {...number} args - Year, month, day, hours, minutes, and seconds.
     */
  constructor(...args) {
    this._date = new Date(...args);
  }

  /**
     * Get the day of the month.
     * @returns {number} The day of the month.
     */
  get date() {
    return this._date.getDate();
  }

  /**
     * Get the full year number.
     * @returns {number} The full year number.
     */
  get year() {
    return this._date.getFullYear();
  }

  /**
     * Get the last two digits of the date's year.
     * @returns {number} The last two digits of the year.
     */
  get yr() {
    return this._date.getFullYear() % 100;
  }

  /**
     * Get the full name of the month.
     * @returns {string} The full name of the month.
     */
  get month() {
    return months[this._date.getMonth()];
  }

  /**
     * Get the abbreviated name of the month (first three letters).
     * @returns {string} The abbreviated name of the month (first 3 letters).
     */
  get mon() {
    return months[this._date.getMonth()].slice(0, 3);
  }

  /**
     * Get the full name of the day of the week.
     * @returns {string} The full name of the day of the week.
     */
  get day() {
    return days[this._date.getDay()];
  }

  /**
     * Get the name of the day of the week (abbreviated).
     * @returns {string} The abbreviated day of the week.
     */
  get dy() {
    return days[this._date.getDay()].slice(0, 3);
  }

  /**
     * Get the hours.
     * @returns {number} The hours.
     */
  get hours() {
    return this._date.getHours();
  }

  /**
     * Get the minutes.
     * @returns {number} The minutes.
     */
  get mins() {
    return this._date.getMinutes();
  }

  /**
     * Get the seconds.
     * @returns {number} The seconds.
     */
  get secs() {
    return this._date.getSeconds();
  }

  /**
     * Provides a human-readable description of the date's difference from the current date.
     * @returns {string} A description of the relative date difference.
     */
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
      } if (diff === 0) {
        return 'today';
      }
    }
  }

  /**
     * Format the date according to the provided mask.
     * @param {string} [mask='Y M D'] - The format mask (Y: full year, y: last two digits of the year, M: full month, m: abbreviated month, D: day of the month with leading zero, d: day of the month without leading zero, H: hours with leading zero, h: hours without leading zero, I: minutes with leading zero, i: minutes without leading zero, S: seconds with leading zero, s: seconds without leading zero).
     * @returns {string} The formatted date, or 'Invalid Date' if the date is not a valid Date.
     */
  format(mask = 'Y M D') {
    if (this._date instanceof Date) {
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
    return 'Invalid Date';
  }
}
