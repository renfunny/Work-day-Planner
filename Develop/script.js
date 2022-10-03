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
var hour = Number(moment().format(`HH`)); //returns the current hour
var currentDate = moment().format(`dddd, MMMM Do`); // returns the current date
//Sets date on top of the page
var dateEl = $(`#currentDay`);
dateEl.text(currentDate);

//Timeblocks
var nineEl = $(`#9`);
var tenEl = $(`#10`);
var elevenEl = $(`#11`);
var twelveEl = $(`#12`);
var oneEl = $(`#13`);
var twoEl = $(`#14`);
var threeEl = $(`#15`);
var fourEl = $(`#16`);
var fiveEl = $(`#17`);

//Timeblocks array to loop over
var timeblocks = [
  nineEl,
  tenEl,
  elevenEl,
  twelveEl,
  oneEl,
  twoEl,
  threeEl,
  fourEl,
  fiveEl,
];

//Tasks array of objects to be stored in the local storage
var task = `tasks`;
var tasks = JSON.parse(localStorage.getItem(`tasks`)) ?? [
  {
    hour: 9,
    task: ``,
  },
  {
    hour: 10,
    task: ``,
  },
  {
    hour: 11,
    task: ``,
  },
  {
    hour: 12,
    task: ``,
  },
  {
    hour: 13,
    task: ``,
  },
  {
    hour: 14,
    task: ``,
  },
  {
    hour: 15,
    task: ``,
  },
  {
    hour: 16,
    task: ``,
  },
  {
    hour: 17,
    task: ``,
  },
];

//loops through the timeblocks and checks the id value which is equal to its corresponding hour, if the hour is less than the current hour it will add the past class and display it as grey, if the hour is more then the current hour it will add the future class and display it as green, and if the hour is the same as the current hour it will add the present class and display it as red. This also displays the tasks stored in the local storage to its corresponding timeblock
for (let i = 0; i < timeblocks.length; i++) {
  if (timeblocks[i].attr(`id`) < hour) {
    timeblocks[i].children(`.row`).children(`textarea`).addClass(`past`);
    timeblocks[i].children(`.row`).children(`textarea`).text(tasks[i].task);
  } else if (timeblocks[i].attr(`id`) > hour) {
    timeblocks[i].children(`.row`).children(`textarea`).addClass(`future`);
    timeblocks[i].children(`.row`).children(`textarea`).text(tasks[i].task);
  } else {
    timeblocks[i].children(`.row`).children(`textarea`).addClass(`present`);
    timeblocks[i].children(`.row`).children(`textarea`).text(tasks[i].task);
  }
}
var saveBtn = $(`.saveBtn`);
var textInputArr = saveBtn.prev(); //returns array with all textareas

//adds click event to all save buttons
saveBtn.on(`click`, function () {
  var textInputIndex = Number(this.id); //returns the id of the button pressed (0-8)
  var textInput = textInputArr[textInputIndex].value; //returns the task written in the textbox within the same timeblock of the save button pressed
  tasks[textInputIndex].task = textInput; //sets task in tasks array stored in local storage
  localStorage.setItem(task, JSON.stringify(tasks)); // updates local storage
});
