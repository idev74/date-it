const DateIt = require('./../src/index.js');

describe('DateIt', () => {
    const sampleDate = new Date(2023, 0, 15, 10, 5, 30);

    describe('DateIt Getter Methods', () => {
        let dateIt;

        beforeEach(() => {
            dateIt = new DateIt(sampleDate);
        });
        describe('constructor', () => {
            it('should create a DateIt instance with the provided date', () => {
                const date = new Date(2023, 0, 1);
                const dateIt = new DateIt(2023, 0, 1);
                expect(dateIt._date).toEqual(date);
            });
        });

        describe('date', () => {
            it('should return the day of the month', () => {
                const dateIt = new DateIt(2023, 0, 15);
                expect(dateIt.date).toBe(15);
            });
        });

        describe('year', () => {
            it('should return the full year', () => {
                expect(dateIt.year).toBe(2023);
            });
        });

        describe('yr', () => {
            it('should return the last two digits of the year', () => {
                expect(dateIt.yr).toBe(23);
            });
        });

        describe('month', () => {
            it('should return the full name of the month', () => {
                expect(dateIt.month).toBe('January');
            });
        });

        describe('mon', () => {
            it('should return the abbreviated name of the month', () => {
                expect(dateIt.mon).toBe('Jan');
            });
        });

        describe('day', () => {
            it('should return the full name of the day of the week', () => {
                expect(dateIt.day).toBe('Sunday');
            });
        });

        describe('dy', () => {
            it('should return the abbreviated name of the day of the week', () => {
                expect(dateIt.dy).toBe('Sun');
            });
        });

        describe('hours', () => {
            it('should return the hours', () => {
                expect(dateIt.hours).toBe(10);
            });
        });

        describe('mins', () => {
            it('should return the minutes', () => {
                expect(dateIt.mins).toBe(5);
            });
        });

        describe('secs', () => {
            it('should return the seconds', () => {
                expect(dateIt.secs).toBe(30);
            });
        });

        describe('when', () => {
            it('should return "today" for the current date', () => {
                const now = new Date();
                const dateIt = new DateIt(now);
                expect(dateIt.when()).toBe('today');
            });

            it('should return a human-readable description of the date difference', () => {
                const now = new Date();
                const futureDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
                const dateIt = new DateIt(futureDate);
                expect(dateIt.when()).toMatch(/1 year from now/);
            });
        });

        describe('format', () => {
            it('should format the date according to the provided mask', () => {
                const dateIt = new DateIt(2023, 0, 15, 10, 5, 30);
                expect(dateIt.format('Y M D H I S')).toBe('2023 January 15 10 05 30');
            });
            it ('should format the abbreviated date according to the provided mask', () => {
                const dateIt = new DateIt(2023, 0, 15, 10, 5, 30);
                expect(dateIt.format('y m d h i s')).toBe('23 Jan 15 10 5 30');
            });
        });
    });
});