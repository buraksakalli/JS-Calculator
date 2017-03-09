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
	const len = arr.length;
	console.log(arr);

	let a = arr.slice(0, len-2);
	let result = arthm(a, arr[len-1], arr[len-2]);
	console.log(result);
	if (isNaN(result)) result = "Wrong input";
	//console.log(isNaN(a));
}

function arthm(a, b, operator) {
	if (isNaN(a)) {
		console.log(a);
		if (a.length > 3) {
			let c = a.slice(0, a.length-2);
			a = arthm(c, a[a.length-1], a[a.length-2]);
		} else {
			let c = a[0];
			a = arthm(c, a[2], a[1]);
		}

	};
	a = parseFloat(a); b = parseFloat(b);
	switch(operator) {
			case "+":
				return a+b;
			case "-":
				return a-b;
			case "x":
				return a*b;
			case "/":
				return a/b;
	}

}