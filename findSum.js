

function sumOfIntegers(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Input must be a non-empty array of integers.");
    }
    const Sum = arr.reduce((acc, curr) => acc + curr, 0);
    return Sum;
}


const Values = [1, 2, 3, 4, 5];
const Result = sumOfIntegers(Values);

console.log(Result)

// Run using node findSum.js