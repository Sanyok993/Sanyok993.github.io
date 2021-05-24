let inputTime = document.getElementById('select-time'),
	 ul = document.createElement('ul');

let dataTime = {
	arrayTime: [
		'8:30', 
		'9:00',
		'9:30',
		'10:00' 
	],
	checkTime(array) {
		let currentTime = new Date(),
			 currentHours = currentTime.getHours() * 60,
			 currentMinutes = currentTime.getMinutes();

		for(let i = 0; i < array.length; i++) {
			let avaliableTime = array[i].replace(/:/gi, '');

			if(avaliableTime.length == 3) {
				console.log(avaliableTime.slice(0, 1));
				console.log(avaliableTime.slice(1, 3));
			} else {
				console.log(avaliableTime.slice(0, 2));
				console.log(avaliableTime.slice(2, 4));
			}
		}
	},

}

dataTime.checkTime(dataTime.arrayTime);
