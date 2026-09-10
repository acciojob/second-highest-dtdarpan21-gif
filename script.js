//your JS code here. If required.
function secondHighest(){
	let highest = -Infinity;
	let secondHighest = -Infinity;

	for(let i = 0; i<arr.length; i++) {
		if (arr[i] > highest) {
			secondHighest = highest;
			highest = arr[i];
			
		}else if (arr[i]> secondHighest && arr[i] !== highest){
			secondHighest = arr[i];
			
		}
	}

	return secondHighest;
}