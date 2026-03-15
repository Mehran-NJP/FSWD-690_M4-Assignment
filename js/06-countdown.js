// Assignment 4: Countdown 
// NOTE: I decided to add Validating the input.

let input = prompt("Enter a number between 5 and 100:");

if (input === null) {
  console.log("No number entered. Exiting.");
} else {
  while (true) {
    const n = Number(input);
    const isInteger = Number.isInteger(n);
    const inRange = n >= 5 && n <= 100;

    if (isInteger && inRange) {
      // Valid: perform countdown
      for (let i = n; i >= 0; i--) {
        console.log(i);
      }
      break;
    }

    // Invalid: re-prompt
    input = prompt("Invalid input. Enter an INTEGER between 5 and 100. Click Cancel to exit.");
    if (input === null) {
      console.log("No valid number provided. Exiting.");
      break;
    }
  }
}