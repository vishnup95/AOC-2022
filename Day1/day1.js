import { readFile } from 'node:fs/promises';

const inputData = await readFile('./input.txt', {
	encoding: 'utf-8',
});

const sortedSumCalorieCount = inputData
	.split('\n\n')
	.map((calorieTotal) => {
		return calorieTotal.split('\n').reduce((acc, curr) => {
			return Number(acc) + Number(curr);
		}, 0);
	})
	.sort((a, b) => a - b);

console.log('Part1', sortedSumCalorieCount.at(-1));

function calculateMean(...calories) {
	return calories.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
}

console.log(
	'Part2',
	calculateMean(
		sortedSumCalorieCount.at(-1),
		sortedSumCalorieCount.at(-2),
		sortedSumCalorieCount.at(-3)
	)
);
