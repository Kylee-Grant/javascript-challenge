// Code based on Activity 14.3.3 

// Questions: 
// 1) How to make sure ALL the rows are showing up on the website? 
// 2) How to make sure event listener is working and is updating the table? 

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

/* CREATING THE TABLE */
// All states: https://gist.github.com/bubblerun/a624de5b4fa8ff0980010054a7220977
var stateInitials = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

// Capitalize first letter: https://dzone.com/articles/capitalize-first-letter-string-javascript
function upperCaseFirst(string) 
{
    if (string == "us") { 
        return "US"}
    if (stateInitials.includes(string.toUpperCase())) {
        return string.toUpperCase()}
    else {
        return string.charAt(0).toUpperCase() + string.slice(1)}
};

// All together 
data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(upperCaseFirst(value));
  });
});

/* HANDLING EVENTS */
// Select the button
// var button = d3.select("#button");

// // Select the form
// var form = d3.select("#form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   //d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#form-control");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("text");

//   console.log(inputValue);

//   var filteredData = data.filter(d => d.datetime === inputValue);

//   data.forEach((filteredData) => {
//     var row = tbody.append("tr");
//     Object.entries(filteredData).forEach(([key, value]) => {
//       console.log(key, value);
//       var cell = row.append("td");
//       cell.text(upperCaseFirst(value));
//     })}
// };


/* PREWORK FOR THIS HOMEWORK FROM ACTIVITY 14.3.3 */
// // Console.log the data from data.js
// console.log(tableData);

// // Step 1: Loop Through `data` and console.log each ufo sighting object
// data.forEach(function(tableData) {
//   console.log(tableData);
// });

// // Step 2:  Use d3 to append one table row `tr` for each ufo sighting object
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each ufo sighting object
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");

//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");

//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo sighting object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // ufo sighting values (datetime, city, state, country, shape, durationMinutes, comments)
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo sighting object 
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
