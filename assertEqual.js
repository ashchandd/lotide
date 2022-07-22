const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Testing
console.log(assertEqual(1, 1));
console.log(assertEqual(2, 1));
console.log(assertEqual("LLH", "LLH"));
console.log(assertEqual("LLH", "LHH"));



