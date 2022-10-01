/* Pseudocode
1. Use moments.js to display current day at the top of the calendar
2. Make Timeblocks representing every hour from 9 to 5
3. Within time block, have a text-area/input on the left to add any events the user may have AND a save button on the right to save the event in the local storage
4. Add classes to each time block so the color is able to change nbased on the current time displayed by moments.js
    To do so we can use an if/else statement to compare the current time (just the hour in moment.js [HH]) to the time block class (time block hour)
5. Get save icon from a web API
6. Use military time (24 Hr) to prevent bugs
7. 
*/
var hours = moment().format(`HH`);
var currentDate = moment().format(`dddd, MMMM Do`);
console.log(hours);
console.log(currentDate);
var dateEl = $(`#currentDay`);
dateEl.text(currentDate);
