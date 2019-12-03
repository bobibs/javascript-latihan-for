segitiga = angka => {
	let output = '';

	for (i = 0; i < angka; i++) {
		if (i < 2) {
			for (j = 0; j <= i; j++) {
				output += '*';
			}
		} else if (i >= 2) {
			output += '*';
			for (j = 0; j <= i - 2; j++) {
				output += '- ';
			}
			output += '*';
		}
		output += '\n';
	}
	return output;
};

// console.log(segitiga(5));

segitigaBesar = tinggi => {
	let output = '';

	for (a = 0; a < tinggi; a++) {
		for (b = a; b < tinggi - 1; b++) {
			output += ' ';
		}

		for (c = 0; c <= a; c++) {
			output += '1';
		}

		for (d = 0; d <= a - 1; d++) {
			output += '2';
		}

		if (a < tinggi - 1) {
			output += '\n';
		}
	}

	return output;
};

// console.log(segitigaBesar(2));

function segitigaAngka(tinggi) {
	let output = '';
	let angka = 1;

	for (a = 0; a < tinggi; a++) {
		for (b = tinggi; b > a; b--) {
			output += ' ';
		}
		for (c = 0; c <= a; c++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		for (d = 1; d <= a; d++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		if (a < tinggi - 1) {
			output += '\n';
		}
		angka += 1;
	}
	return output;
}

// console.log(segitigaAngka(5));
