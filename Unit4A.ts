/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-24
 * @fileoverview This program counts backward by 5's from 100 down to 0.
 */

// variable
let currentValue: number = 100;

// output header
console.log("Backward count by 5's from 100 to 0:");

// loop to count backward by 5's
while (currentValue >= 0) {
  console.log(currentValue);
  currentValue -= 5;
}

console.log("\nDone.");
