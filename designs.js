// // Select color input (allow users to change color repeatedly):
let colorInput = document.getElementById('colorPicker');
let colorValue = colorInput.value;

document.getElementById('colorPicker').addEventListener('input', function () {  // listener for user selecting input and changing colorValue letiable
  colorInput = document.getElementById('colorPicker');
  colorValue = colorInput.value;
});

// // Select size input:
let row = document.getElementById('inputHeight').value; // creating letiable for number of rows

document.getElementById('inputHeight').addEventListener('input', function () {
  row = document.getElementById('inputHeight').value;  // assigning user input to row letiable
});

let column = document.getElementById('inputWidth').value; // creating letiable for number of columns

document.getElementById('inputWidth').addEventListener('input', function () {
  column = document.getElementById('inputWidth').value; // assigning user input to column letiable
});

// // the event listener for creating the grid:
document.getElementById('sizePicker').addEventListener('submit', function () {
  event.preventDefault(); // to prevent form submission from refreshing page
  makeGrid(row, column); // calling the grid function
  const tdArray = document.querySelectorAll('td'); // create list of all grid cells
  // loop through each grid cell listening for mousedown event:
  tdArray.forEach((td, i) => {
    td.addEventListener('mousedown', function () {
      td.style.backgroundColor = colorValue;
    });
  });
});


// //  the function to create the grid:
function makeGrid(row, column) {
  gridTable = document.getElementById('pixelCanvas');
  for (let i = gridTable.rows.length ; i > 0; i--) {  //  this resets the grid for new dimensions
    gridTable.deleteRow(i-1);
  }
  for (let r = 0; r <  row; r++) {
    tr = gridTable.insertRow();
    for (let c = 0; c < column; c++) {
      td = tr.insertCell();
    }
  }
}
