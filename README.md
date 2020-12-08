# 20 12 08 JS Functions Primary

Add comments above each exercise solution (at minium). Comment out any broken code before 9PM submission and provide context on what's not working.

## Alerting a Personalized Message 
Declare a function that accepts a user message and a user name. The function should alert the message : "Hello [NAME]. Your message is : [MESSAGE]". Prompt the user to enter their name and a message. Call the function, passing in the user information.

## Preforming Mathematical Operations
Declare a function that accepts two numbers and alerts the message "Preforming addition, subtraction, multiplication, and division on [NUM1] and [NUM2]." Declare a function for each operation listed that accepts two numbers and outputs the message "The sum/difference/product/quotient of [NUM1] and [NUM2] is [VALUE]" appropriate to the function. Call each of these functions in the original math function after the alert. Prompt the user to enter two numbers. Call the original math function passing in the user's numbers.

## Adding Students to a Class Roster
Declare an empty array. Define a function that accepts a student and adds it to the array. Prompt the user to add students to this array until they enter done. If the user enters "Autumn" or "Erin" alert "The person you are attempting to add to the class roster is not a student". Otherwise add the student to the array using the function defined. Once the user enters done iterate through the array outputting each element in an ordered list (proceeded by a number) in the console.

----------
For example, if I enter : `Autumn, Chris, Audre, Erin, Damien, done` the output in the console will be
```
1. Chris
2. Audre
3. Damein
```