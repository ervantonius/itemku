function solution(N, users) {
	var answer = [];
	var data = [];

	for (var i = 1; i <= N; i++) {
		data[i] = users.filter(e => e == i).length / users.length;
		users = users.filter(e => e !== i); 
	}

	data = Object.keys(data).sort((a, b) => data[b] - data[a]);

	for (var i = 0; i < data.length; i++) {
		answer[i] = parseInt(data[i]);
	}

	return answer;
}