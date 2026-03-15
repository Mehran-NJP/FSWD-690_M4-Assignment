// Assignment 4: Coin Flip Game Redux

let coinFlip;

// Prompt for number of flips (no validation)
let flips = Number(prompt('How many times should I flip the coin?'));

// Counters for summary
let headsCount = 0;
let tailsCount = 0;

// Run the loop the requested number of times
for (let i = 0; i < flips; i++) {
  coinFlip = Math.round(Math.random()); // 0 = Heads, 1 = Tails
  const attemptLabel = `Attempt #${i + 1}:`;

  if (coinFlip === 0) {
    console.log(`${attemptLabel} Heads`);
    headsCount++;
  } else {
    console.log(`${attemptLabel} Tails`);
    tailsCount++;
  }
}

// Final summary line
console.log(`Summary: Heads = ${headsCount}, Tails = ${tailsCount}`);