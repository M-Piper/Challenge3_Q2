// Import the readline module (used to allow user input to restart or exit)
const readline = require('readline');

// Creates an instance of the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//The main function runs the arrays and loops called for in the assignment
function main() {
    //instantiate an empty array
    let numberList = [];

    //create a loop that runs for values 0 through to 5
    for (let i = 0; i <= 5; i++) {
        numberList[i] = i;
    }
    console.log("This is the variable numberList with all of the integers included: ", numberList);

    numberList.pop();

    console.log("This is the variable numberList after using the pop() function to remove the last integer in the array: ", numberList);
}


// This function allows for the user to provide input on whether to restart or exit after the main function is completed
function askUser() {
    rl.question("Would you like to restart the program (s) or exit (x)? ", (answer) => {
        if (answer.toLowerCase() === 'x') {
            console.log("Exiting the program.");
            rl.close(); // Close the readline interface
        } else if (answer.toLowerCase() === 's') {
            console.log("Restarting the program...");
            main();
            askUser(); // Ask again after running the program
        } else {
            console.log("Invalid input. Please enter 's' to restart or 'x' to exit.");
            askUser(); // Ask again for valid input
        }
    });
}

// Calling the main function and the prompt to ask the user whether to exit or restart
main();
askUser();