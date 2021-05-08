// Code based on Activity 14.3.3 

/* VARIABLES */
// Grab UFO sightings from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// All states: https://gist.github.com/bubblerun/a624de5b4fa8ff0980010054a7220977
var stateInitials = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];


/* CREATING THE TABLE */
function makeTable(data) {
  // Clear out entire table by replacing it with an empty string
  tbody.html("");
  // Use input (data) to create the new table 
  data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");

      // Formatting cells according to content
      // Capitalize first letter: https://dzone.com/articles/capitalize-first-letter-string-javascript
      value = String(value)
      if (value == 'us') {value = 'US'}
      if (stateInitials.includes(value.toUpperCase())) {value = value.toUpperCase()}
      else {value = value.charAt(0).toUpperCase() + value.slice(1)}

      cell.text(value);
    });
  });
}; 

/* HANDLING EVENTS */
// Update the table with the filter button input value 
function runEnter() {
  
  // Select the input element and get the raw HTML node
  var inputValue = d3.select("#datetime").property("value");
  console.log(inputValue);
  var filteredData = data.filter(d => d.datetime === inputValue);
  makeTable(filteredData);
};

/* INITIALIZE PAGE */
function init() {
  makeTable(tableData);
}
init(); 

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);