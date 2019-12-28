let yturl;

function getData(filename) {
	$.getJSON('../data/' + filename + '.json', function(data) {
		console.log(data);
		yturl = data.yturl;

		let tables = '';

		if (data.images) {
			// create images table
			tables += '<div class="table-divider"><table><tr><th>Images</th></tr>';
			tables += dataToTable(data.images);
			tables += '</table></div>';
		}

		if (data.videos) {
			// create videos table
			tables += '<div class="table-divider"><table><tr><th>Videos</th></tr>';
			tables += dataToTable(data.videos);
			tables += '</table></div>';
		}

		if (data.music) {
			// create music table
			tables += '<div class="table-divider"><table><tr><th>Music</th></tr>';
			tables += dataToTable(data.music);
			tables += '</table></div>';
		}

		if (data.sfx) {
			// create SFX table
			tables += '<div class="table-divider"><table><tr><th>SFX</th></tr>';
			tables += dataToTable(data.sfx);
			tables += '</table></div>';
		}

		document.getElementById('main').innerHTML = tables;
	});
}

function dataToTable(arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		const time = element.min * 60 + element.sec;
		str += '<tr><td><a href="' + yturl + '?t=' + time + '">' + element.min + ':';
		if (element.sec < 10) {
			str += '0' + element.sec;
		} else {
			str += element.sec;
		}
		str += '</a></td><td><a href="' + element.source + '">';
		str += element.name + '</a></td></tr>';
	}

	return str;
}
