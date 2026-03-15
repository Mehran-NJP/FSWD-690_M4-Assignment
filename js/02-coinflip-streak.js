// Assignment 4: Coin Flip Streak Game (With Attempt #)

let coinFlip;
let attempt = 0;

do {
  attempt++;
  coinFlip = Math.round(Math.random()); // 0 or 1
  const label = `Attempt #${attempt}:`;
  console.log(coinFlip === 0 ? `${label} Heads` : `${label} Tails`);
} while (coinFlip === 0);