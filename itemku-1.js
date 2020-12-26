function solution(record) {
	var answer = [];
	var data = [];
	var name = [];

	for (var i = 0; i < record.length; i++) {
		var split_record = record[i].split(" ");
		var info = split_record[0];
		var uid = split_record[1];
		var record_name = split_record[2];

		if (info != 'Change') {
			if (info == 'Enter') {
				name[uid] = record_name;

				data[uid + '-enter' + i] = ' came in';
			} else if (info == 'Leave') {
				data[uid + '-leave' + i] = ' has left';
			}
		} else {
			name[uid] = record_name;
		}
	}

	for (var key in data) {
		var split_data = key.split('-');
		var uid_data = split_data[0];

		answer.push(name[uid_data] + data[key]);
	}

	return answer;
}