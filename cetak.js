const cetak = (angka) => {
	for (let i = 1; i <= angka; i++) {
		let print = null;
		let y = null;
		if (i % 3 === 0) {
			print = 'fish';
			y = i;
		}
		if (i % 5 === 0) {
			print = 'bash';
			y = i;
		}
		if (i % 15 === 0) {
			print = 'fish bash';
			y = i;
		}
		y ? console.log(y + print) : '';
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

const reverseString = (kata) => {
	let balikKata = '';
	for (let i = kata.length - 1; i >= 0; i--) {
		balikKata += kata[i];
	}
	if (kata === balikKata) {
		return true;
	} else {
		return false;
	}
};
reverseString('kata');
reverseString('taat');
