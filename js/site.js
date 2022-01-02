// Grab Fizz Buzz input values
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // Convert to Int
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Validate that values are indeed numbers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // Call fizzBuzz to get our result data
        let fbData = fizzBuzzC(fizzValue, buzzValue);
        // Call displayResults to display result data to page
        displayResults(fbData)
    } else {
        alert("You must use integers for values")
    }
}

// One of three functions for "FizzBuzzing" (fizzBuzz, fizzBuzzB, or fizzBuzzC)
// Solve FizzBuzz 1-100 with If statement
function fizzBuzz(fizzVal, buzzVal) {
    let returnArr = [];

    // Check numbers 1-100 if number is fizzbuzzable
    for (let i = 1; i <= 100; i++) {
        // Check if divisible by Fizz AND Buzz value first
        if (i % fizzVal == 0 && i % buzzVal == 0) {
            returnArr.push('FIZZBUZZ');
        } else if (i % fizzVal == 0) {
            returnArr.push('FIZZ');
        } else if (i % buzzVal == 0) {
            returnArr.push('BUZZ');
        } else {
            returnArr.push(i);
        }
    }
    return returnArr;
}

// FizzBuzz using Switch statement in place of If
function fizzBuzzB(fizzVal, buzzVal) {
    let returnArr = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {

        Fizz = i % fizzVal == 0;
        Buzz = i % buzzVal == 0;

        switch(true)
        {
            case Fizz && Buzz:{
                returnArr.push('FIZZBUZZ');
                break;
            }
            case Fizz:{
                returnArr.push('FIZZ');
                break;
            }
            case Buzz:{
                returnArr.push('BUZZ');
                break;
            }
            default:{
                returnArr.push(i)
                break;
            }
        }
    }
    return returnArr;
}

// FizzBuzz using ternary operator in place of If
function fizzBuzzC(fizzVal, buzzVal) {
    let returnArr = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzVal == 0 ? 'FIZZ' : '') + (i % buzzVal == 0 ? 'BUZZ' : '') || i )
        returnArr.push(value)
    }
    return returnArr;
}

// Display Results
function displayResults(fbResults) {
    // Get table body from page
    let tableBody = document.getElementById("results");

    // Get template row
    let templateRow = document.getElementById("fbTemplate");

    // Clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbResults.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        // grab the TDs to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbResults[i]);
        rowCols[0].textContent = fbResults[i];

        rowCols[1].classList.add(fbResults[i + 1]);
        rowCols[1].textContent = fbResults[i + 1];

        rowCols[2].classList.add(fbResults[i + 2]);
        rowCols[2].textContent = fbResults[i + 2];

        rowCols[3].classList.add(fbResults[i + 3]);
        rowCols[3].textContent = fbResults[i + 3];

        rowCols[4].classList.add(fbResults[i + 4]);
        rowCols[4].textContent = fbResults[i + 4];

        // Apply TDs to current row on page
        tableBody.appendChild(tableRow);
    }
}