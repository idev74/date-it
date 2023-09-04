# date-it
A simple date library that makes getting date properties easier!

## Example Output
```
const date = new DateIt()
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

const formatted = new DateIt(2023, 0, 1, 2, 3, 4)
console.log(formatted.format())              // 2023 January 01
console.log(formatted.format('y/m/d'))       // 23/Jan/1
console.log(formatted.format('H:I:S'))       // 02:03:04
console.log(formatted.format('h:i:s'))       // 2:3:4
console.log(formatted.format('Y-M-D h:I:S')) // 2023-January-01 2:03:04

// on September 4, 2023
const d = new DateIt(2023, 2, 2, 3, 4, 5)
console.log(d.when()) // 6 months ago
const e = new DateIt(2023, 12, 2, 3, 4, 5)
console.log(e.when()) // 3 months from now
const f = new DateIt(2028, 9, 2, 3, 4, 5)
console.log(f.when()) // 5 years from now
const g = new DateIt(2023, 8, 8, 7, 8, 9)
console.log(g.when()) // 3 days from now
const h = new DateIt()
console.log(h.when()) // today
```
