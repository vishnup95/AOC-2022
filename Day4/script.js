import * as fs from 'fs/promises';

const input = await fs.readFile('./input.txt', 'utf8');

let count = 0;
input.split('\n').map((assignments) => {
	const [p1, p2] = assignments.split(',');

	const [a1, a2] = p1.split('-');
	const [b1, b2] = p2.split('-');

	// part 1
	// if (Number(b1) <= Number(a1) && Number(b2) >= Number(a2)) {
	// 	count += 1;
	// } else if (Number(a1) <= Number(b1) && Number(b2) <= Number(a2)) {
	// 	count += 1;
	// }

	// part 2,
	if (Number(b1) <= Number(a2) && Number(b1) >= Number(a1)) {
		count += 1;
	} else if (Number(a1) >= Number(b1) && Number(a1) <= Number(b2)) {
		count += 1;
	}
});

console.log(count);
