const factorial = n => n <= 1 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);

const result = factorial(5);
console.log(`Faktoriál 5 je ${result}`);

const findMinMax = numbers => numbers.length ? [Math.min(...numbers), Math.max(...numbers)] : [null, null];

const numbers = [3, 1, 4, 1, 5, 9, 2];
const [minNum, maxNum] = findMinMax(numbers);
console.log(`Nejmenší číslo: ${minNum}, Největší číslo: ${maxNum}`);

const bubbleSort = numbers => {
    numbers = [...numbers];

    numbers.forEach((_, i, arr) => arr.forEach((_, j) => arr[j] > arr[j + 1] && ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]])));

    return numbers;
};

const numbersToSort = [3, 1, 4, 1, 5, 9, 2];
const sortedNumbers = bubbleSort(numbersToSort);
console.log(`Seřazené čísla: ${sortedNumbers}`);