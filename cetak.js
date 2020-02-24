const cetak = (angka) => {
	for (let i = 1; i <= angka; i++) {
		if (i % 3 === 0) {
			console.log(i + ' fish');
		}
		if (i % 5 === 0) {
			console.log(i + ' bash');
		}
		if (i % 15 === 0) {
			console.log(i + ' fish bash');
		}
	}
};

cetak(5);
cetak(7);
cetak(15);

const sortDesc = (array) => {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (array[i] < array[j]) {
				const temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}
	console.log(array);
};
sortDesc([ 3, 4, 2, 7 ]);
sortDesc([ 7, 3, 2, 5 ]);

const sortAsc = (array) => {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (array[i] > array[j]) {
				const temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}

	console.log(array);
};

sortAsc([ 7, 3, 2, 5 ]);
sortAsc([ 7, 4, 2, 3 ]);

const balik = (kata) => {
	console.log(kata);
	const kataBalik = kata.split('').reverse().join('');
	console.log(kataBalik);
	if (kataBalik === kata) {
		return true;
	} else {
		return false;
	}
};

balik('kata');
balik('taat');
