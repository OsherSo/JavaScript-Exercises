/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

function areThereDuplicates(...args) {
  const lut = {};
  for (const arg of args) {
    lut[arg] = (lut[arg] || 0) + 1;
  }

  for (const arg in lut) {
    if (lut[arg] > 1) return true;
  }

  return false;
}

function areThereDuplicatesWithoutLut(...args) {
  args.sort();
  for (let i = 1; i < args.length; ++i) {
    if (args[i] === args[i - 1]) return true;
  }
  return false;
}

function areThereDuplicatesUsingSet() {
  return new Set(arguments).size !== arguments.length;
}
