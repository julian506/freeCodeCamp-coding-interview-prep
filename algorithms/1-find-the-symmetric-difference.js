function getSymmetricDifference(array1, array2) {
  const symmetricDifference = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i]) &&
      !symmetricDifference.includes(array1[i])) {
      symmetricDifference.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i]) &&
      !symmetricDifference.includes(array2[i])) {
      symmetricDifference.push(array2[i]);
    }
  }
  return symmetricDifference;
}

function sym(...args) {
  let symmetricDifference = [];
  for (let i = 0; i < args.length; i++) {
    symmetricDifference = getSymmetricDifference(symmetricDifference, args[i]);
  }
  return symmetricDifference;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));