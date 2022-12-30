const garland = document.createElement('div');
garland.classList.add('garland');

document.body.append(garland);

let order = 1;

setInterval(() => {
	switch (order) {
		case 1:
			garland.classList.add('garland_two');
			garland.classList.remove('garland_one');
			order = 2;
			break;
		case 2:
			garland.classList.add('garland_three');
			garland.classList.remove('garland_two');
			order = 3
			break;
		case 3:
			garland.classList.add('garland_four');
			garland.classList.remove('garland_three');
			order = 4;
			break;
		case 4:
			garland.classList.add('garland_one');
			garland.classList.remove('garland_four');
			order = 1;
			break;
	}
}, 700)