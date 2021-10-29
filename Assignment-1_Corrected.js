//------------------------------------Question 1 -------------------------------------------------
//                                -------Method1-------------
function printPyramidMethod1(value, specialCharacter = "*") {
  for (let i = 0; i <= value; i++) {
    //let gaps = " ".repeat(value - i);
    let printStar = " ".repeat(value - i) + (specialCharacter + " ").repeat(i);
    //let pattern = gaps + printStar;
    console.log(printStar);
  }
}
printPyramidMethod1(5); //passing value and default character to display the pattern
printPyramidMethod1(5, "^"); //passing value and user defined character to display the pattern

//                                  ------Method2-----------
function printPyramidMethod2(value, specialCharacter = "*") {
  for (let i = 1; i <= value; i++) {
    let str = "";
    for (let j = 1; j <= value; j++) {
      if (j >= value + 1 - i && j <= value - 1 + i)
        str += specialCharacter + " ";
      else str += " ";
    }
    console.log(str);
  }
}
printPyramidMethod2(3);
printPyramidMethod2(4, "@");

//------------------------------------Question 2 -------------------------------------------------

function PassOrFail() {
  let subjects = ["Maths", "Physics", "Chemistry"]; //Array that stores subject names
  let marks = [];
  let status = [];
  let finalValue = [];
  for (var i = 0; i < 3; i++) {
    let x = Math.floor(Math.random() * 100); //random function that generates random values for marks validation
    marks.push(x); // pushing values into array
    marks[i] < 35 ? (status[i] = "FAIL") : (status[i] = "PASS");
    finalValue.push({
      subjects: subjects[0],
      marks: marks[0],
      status: status[0],
    });
  }
  return finalValue;
}
console.table(PassOrFail()); // displays the table list with marks

//------------------------------------Question 3 -------------------------------------------------
var inputArray = [1, 2, 3, 4, 5];
function sumAndmaxArray(inputArray) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i]; // adding the values of array
    if (max < inputArray[i]) {
      max = inputArray[i]; // finding the maximum value in the array
    }
  }
  var obj = {
    max: max,
    sum: sum,
  };
  return obj;
}
console.log(sumAndmaxArray(inputArray)); //function that calculates and returns the maximum value and sum of all values in array .

//------------------------------------Question 4 -------------------------------------------------

function paramDesc(num) {
  var parameterList = {
    1: "Printed the pyramid pattern.Parameter:value which takes height as input and parameter_Type:number",
    2: "printed the values of subjects in table format using console.table() function.Parameter:no parameter passed through function and parameter_Type:",
    3: "Displayed the Sum of elements in array and maximum element in array.Parameter:inputArray and parameter_Type:array",
  };
  console.log(parameterList[num]);
}
paramDesc(1);
paramDesc(2);
paramDesc(3);
