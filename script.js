const numBtns = document.querySelectorAll('.numBtn');

numBtns.forEach(numBtn => numBtn.addEventListener('click',readNum));

let array = []; //is the array sent to compute() func.
let nums=[]; //temporary array to determine the numbers
function readNum() {
	const value = this.value;
	if (parseFloat(value)) {
		nums.push(value);
	} else {
		let num = parseFloat(nums.join(""));
		nums = []; //empty nums array to determine the next number clicked.
		array.push(num);
		array.push(value);
	}

	if (value === "=") {
		compute(array);
		array = [];
	}
}
	
function compute(arr) {
	//get rid of the "=" sign as the last element of the array
	arr.pop(); 
	console.log(arr);
	const len = arr.length;
}