//Time - O(n)
//Space - O(n)
function areThereDuplicatesTime(...args) {
  const lut = {};
  for (let arg of args) {
    if (!lut[arg]) lut[arg] = 1;
    else return true;
  }
  return false;
}

//Time - O(n log n)
//Space - O(1)
function areThereDuplicatesSpace(...args) {
  args.sort();
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) return true;
  }
  return false;
}
