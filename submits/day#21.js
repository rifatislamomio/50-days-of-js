
//union of two arrays
const unionOfArrays = (arr1, arr2) => {
    arr1 = arr1.concat(arr2);
    var set = new Set(arr1);
    return Array.from(set)
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
