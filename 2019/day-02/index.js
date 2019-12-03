const sumFullInstructionSet = arr => {
  console.log(JSON.stringify(arr));
  arr[arr[3]] = arr[arr[1]] + arr[arr[2]];
  console.log(JSON.stringify(arr));
  return arr;
};

const multiplyFullInstructionSet = arr => {
  arr[arr[3]] = arr[arr[1]] * arr[arr[2]];
  return arr;
};

const index = {
  solve: arr => {
    //split intcode into instruction sets
    for (let i = 0; i < arr.length; ) {
      if (!(arr[i] == 1 || arr[i] == 2)) {
      }

      i += 4;
    }
    // Rules:
    //   1 - If the first number of the set is 99, it should stop the execution;
    //   2 - If the first number of the set is 1, it should sumFullInstructionSet;
    //   3 - If the first number of the set is 2, it should multiplyFullInstructionSet;
    return arr[0] === 1
      ? sumFullInstructionSet(arr)
      : arr[0] === 2
      ? multiplyFullInstructionSet(arr)
      : arr;
  }
};

module.exports = index;
