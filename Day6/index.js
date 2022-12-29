import { readFile } from 'node:fs/promises';

//part2
// part1 is 3 instead of 13
const findMarker = (input) => {
	if (typeof input === 'string') {
		const words = input.split('');
		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			if (i <= 12) continue;
			else {
				const wordOfInterest = words.slice(i - 13, i + 1);
				const setOfInterest = new Set(wordOfInterest);
				if (setOfInterest.size === wordOfInterest.length) {
					console.log(word, i + 1);
					return;
				}
			}
		}
	}
};

const input = await readFile('./input.txt', 'utf-8');
findMarker(input);
