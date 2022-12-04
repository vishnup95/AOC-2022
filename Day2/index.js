import { readFile } from 'fs/promises';

// A for Rock, B for Paper, and C for Scissors. - Opponent
// X for Rock, Y for Paper, and Z for Scissors. - player
// shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won)
const SCORE_DICT = {
	X: 1,
	Y: 2,
	Z: 3,
};
const SCORE_2_DICT = {
	ROCK: 1,
	PAPER: 2,
	SCISSORS: 3,
};
const input = await readFile('./input.txt', 'utf8');

let part1Total = 0;
const part1 = (opponentChoosen, playerChoosen) => {
	switch (opponentChoosen) {
		case 'A':
			// ROCK
			switch (playerChoosen) {
				case 'X':
					//ROCK. Draw
					part1Total += SCORE_DICT[playerChoosen] + 3;
					break;

				case 'Y':
					//Paper. Win
					part1Total += SCORE_DICT[playerChoosen] + 6;
					break;

				case 'Z':
					//Scissors. Lose
					part1Total += SCORE_DICT[playerChoosen] + 0;
					break;

				default:
					throw new Error('What hand was that?');
					break;
			}
			break;
		case 'B':
			//Paper
			switch (playerChoosen) {
				case 'X':
					//ROCK. Lose
					part1Total += SCORE_DICT[playerChoosen] + 0;
					break;

				case 'Y':
					//Paper. Draw
					part1Total += SCORE_DICT[playerChoosen] + 3;
					break;

				case 'Z':
					//Scissors. Win
					part1Total += SCORE_DICT[playerChoosen] + 6;
					break;

				default:
					throw new Error('What hand was that?');
					break;
			}
			break;
		case 'C':
			//Scissors
			switch (playerChoosen) {
				case 'X':
					//ROCK. Win
					part1Total += SCORE_DICT[playerChoosen] + 6;
					break;

				case 'Y':
					//Paper. Lose
					part1Total += SCORE_DICT[playerChoosen] + 0;
					break;

				case 'Z':
					//Scissors. Draw
					part1Total += SCORE_DICT[playerChoosen] + 3;
					break;

				default:
					throw new Error('What hand was that?');
					break;
			}
			break;
		default:
			throw new Error(
				`What hand was that by the opponent?? ${opponentChoosen}`
			);
	}
};

let part2Total = 0;
const part2 = (opponentChoosen, playerChoosen) => {
	switch (opponentChoosen) {
		case 'A':
			// ROCK
			switch (playerChoosen) {
				case 'X':
					//Lose. Scissors
					part2Total += SCORE_2_DICT['SCISSORS'] + 0;
					break;

				case 'Y':
					//Draw. ROCK
					part2Total += SCORE_2_DICT['ROCK'] + 3;
					break;

				case 'Z':
					//Win. Paper
					part2Total += SCORE_2_DICT['PAPER'] + 6;
					break;

				default:
					throw new Error('What hand was that?');
					break;
			}
			break;
		case 'B':
			//Paper
			switch (playerChoosen) {
				case 'X':
					//Lose, Rock
					part2Total += SCORE_2_DICT['ROCK'] + 0;
					break;

				case 'Y':
					//Paper. Draw
					part2Total += SCORE_2_DICT['PAPER'] + 3;
					break;

				case 'Z':
					//Scissors. Win
					part2Total += SCORE_2_DICT['SCISSORS'] + 6;
					break;

				default:
					throw new Error('What hand was that?');
					break;
			}
			break;
		case 'C':
			//Scissors
			switch (playerChoosen) {
				case 'X':
					//Lose, Paper
					part2Total += SCORE_2_DICT['PAPER'] + 0;
					break;

				case 'Y':
					// Draw, Scissors
					part2Total += SCORE_2_DICT['SCISSORS'] + 3;
					break;

				case 'Z':
					//Paper
					part2Total += SCORE_2_DICT['ROCK'] + 6;
					break;

				default:
					throw new Error('What hand was that?');
					break;
			}
			break;
		default:
			throw new Error(
				`What hand was that by the opponent?? ${opponentChoosen}`
			);
	}
};

input.split('\n').forEach((startegyGuide) => {
	const [opponentChoosen, playerChoosen] = startegyGuide.split(' ');
	part1(opponentChoosen, playerChoosen);
	part2(opponentChoosen, playerChoosen);
});

console.log({ part1Total });
console.log({ part2Total });

// PART 2 X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
