console.log("20 12 08 JS Functions Primary"); // check that files are linked

// Alerting a Personalized Message
// Declare a function that accepts a user message and a user name. The function should alert the message : "Hello [NAME]. Your message is : [MESSAGE]". Prompt the user to enter their name and a message. Call the function, passing in the user information.

// declared function to output personalized message
function personalMessage(userName, userMessage){
    alert(`Hello ${userName}. Your message is : ${userMessage}`);
}

// prompting user for input
let userName = prompt("Enter your name");
let userMessage = prompt("Enter your message");

// calling function passing in user input
personalMessage(userName, userMessage);

// Preforming Mathematical Operations
// Declare a function that accepts two numbers and alerts the message "Preforming addition, subtraction, multiplication, and division on [NUM1] and [NUM2]." Declare a function for each operation listed that accepts two numbers and outputs the message "The sum/difference/product/quotient of [NUM1] and [NUM2] is [VALUE]" appropriate to the function. Call each of these functions in the original math function after the alert. Prompt the user to enter two numbers. Call the original math function passing in the user's numbers.

// declare function that takes two params
function mathematicalOperations(userNum1, userNum2){
    alert(`Preforming addition, subtraction, multiplication, and division on ${userNum1} and ${userNum2}.`);
    addNumbers(userNum1, userNum2);
    subNumbers(userNum1, userNum2);
    multNumbers(userNum1, userNum2);
    divNumbers(userNum1, userNum2);
}

// prompt for user numbers
let num1 = parseInt(prompt("Enter a number"));
let num2 = parseInt(prompt("Enter another number"));

// call function passing in user numbers
mathematicalOperations(num1, num2);

// declare functions for each math operation and output value
function addNumbers(num1, num2){
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}
function subNumbers(num1, num2){
    console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
}
function multNumbers(num1, num2){
    console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
}
function divNumbers(num1, num2){
    console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}`);
}

// Adding Students to a Class Roster
// Declare an empty array. Define a function that accepts a student and adds it to the array. Prompt the user to add students to this array until they enter done. If the user enters "Autumn" or "Erin" alert "The person you are attempting to add to the class roster is not a student". Otherwise add the student to the array using the function defined. Once the user enters done iterate through the array outputting each element in an ordered list (proceeded by a number) in the console.
let studentRoster = []; // declaring and empty array

// declaring function to add student to array
function addStudent(student){
    studentRoster.push(student);
}

// prompting the user to add a student UNTIL we enter done
let newStudent = prompt("Add a student to the class roster");
while(newStudent != "done"){
    // value entered is Autumn or Erin
    if(newStudent == "Autumn" || newStudent == "Erin"){
        alert("The person you are attempting to add to the class roster is not a student");
        newStudent = prompt("Add another student to the class roster");
    } else { // otherwise
        addStudent(newStudent);
        newStudent = prompt("Add another student to the class roster");
    }
}

// iterate through final student roster
for(let i = 0; i < studentRoster.length; i++){
    console.log(`${i + 1}. ${studentRoster[i]}`);
}