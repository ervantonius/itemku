function solution(relation) {
	var answer = 0;
	var transpose = relation[0].map((_, index) => relation.map(row => (!isNaN(parseInt(row[index]))) ? parseInt(row[index]) : row[index]));
	
	function checkCandidateKey(data) {
		for (var i = 0; i < data.length; i++) {
			var temp = [];
			for (key in data[i]) {
				if (temp.length == 0 || !temp.includes(data[i][key])) {
					temp.push(data[i][key]);
				} else {
					break;
				}
			}

			if (temp.length == relation.length) {
				answer++;
				delete data[i];
			}
		}
	}
	checkCandidateKey(transpose);

	transpose.forEach(function(element, index) {
		for (var i = 0; i < element.length; i++) {
			if (typeof element[i] == "number") {
				delete transpose[index];
				break;
			}
		}
	});

	var data_value = Object.values(transpose);
	var key_data = Object.keys(data_value);

	var combination_key = key_data.flatMap(
		(value, index) => key_data.slice(index + 1).map(x => value + '|' + x)
	);

	var combintaion_data = [];
	for (var i = 0; i < combination_key.length; i++) {
		var split_key = combination_key[i].split('|');
		for (var j = 0; j < data_value.length; j++) {
			var temp = [];
			for (var k = 0; k < data_value[j].length; k++) {
				temp.push(data_value[split_key[0]][k] + '|' + data_value[split_key[1]][k]);
			}
			combintaion_data.push(temp);
			break;
		}
	}
	checkCandidateKey(combintaion_data);

	return answer;
}