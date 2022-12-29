import * as fs from 'fs/promises';

const input = await fs.readFile('./input.txt', {
	encoding: 'utf-8',
});

const crateObject = {} as Record<number, string[]>;
const moveMaps = new Map() as Map<[number], string>;

function parseLine(line: string) {
	if (line) {
		const splitLine = line.split(' ');
		// return early if line doesn't have atlest one crate??
		if (!line.includes('[')) return;
		let countOfSpaces = 0;
		for (let index = 0; index < splitLine.length; index++) {
			const ele = splitLine[index];
			if (ele === '') {
				countOfSpaces++;
			} else {
				const idx = countOfSpaces / 4;
				if (crateObject[idx]) {
					crateObject[idx].unshift(ele);
				} else {
					crateObject[idx] = [ele];
				}
				countOfSpaces += 4;
			}
		}
	}
}

const parseInstructions = (line: string) => {
	if (line.includes('move')) {
		const moveInstructions = line.split(' ');
		// let's work with symbols or objects??
		moveMaps.set(
			[Number(moveInstructions[1])],
			`${Number(moveInstructions[3]) - 1} => ${Number(moveInstructions[5]) - 1}`
		);
	}
};

input.split('\n').forEach((line) => {
	parseLine(line);
	parseInstructions(line);
});

const moveCratesPart1 = () => {
	moveMaps.forEach((move, [quantity]) => {
		const [_from, _to] = move.split(' => ');
		const from = Number(_from);
		const to = Number(_to);
		for (let index = 0; index < quantity; index++) {
			crateObject[to].push(crateObject[from]?.at?.(-1) || '');
			crateObject[from].pop();
		}
	});

	const part1 = Object.values(crateObject)
		.map((val) => {
			return val.at(-1)?.match(/[A-Z]/gm);
		})
		.flat()
		.join('');
	console.log(part1);
};

const moveCratesPart2 = () => {
	moveMaps.forEach((move, [quantity]) => {
		const [_from, _to] = move.split(' => ');
		const from = Number(_from);
		const to = Number(_to);
		crateObject[to].push(...crateObject[from]?.splice(-quantity));
	});
	console.log({ crateObject });

	const part2 = Object.values(crateObject)
		.map((val) => {
			return val.at(-1)?.match(/[A-Z]/gm);
		})
		.flat()
		.join('');
	console.log(part2);
};

moveCratesPart2();
