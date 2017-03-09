const numBtns = document.querySelectorAll('.numBtn');
const resultElem = document.querySelector('#result');
const formulaElem = document.querySelector('#formula');

numBtns.forEach(numBtn => numBtn.addEventListener('click',readNum));

let array = [], //is the array sent to compute() func.
	nums=[]; //temporary array to determine the numbers

function readNum() {
	const value = this.value;

	/* If AC btn is pressed clear everything */
	if (value === "AC") {
		array = [];
		nums = [];
		formulaElem.innerHTML = "";
		resultElem.innerHTML = "";
	} else {
		/* Otherwise:
			i)  Append the clicked values to formulaElem
				and let the user see what he is clicking at
		*/
		formulaElem.appendChild(
			document.createTextNode(value)
		);
		
		/*  ii) Fill array for computation */
		if (!isNaN(parseFloat(value))) {
			nums.push(value);
		} else {
			if (value === ".") nums.push(value);
			else {
				let num = parseFloat(nums.join(""));
				array.push(num);
				array.push(value);
				nums = []; //empty nums array to determine the next number clicked.
			}
		}
		if (value === "=") {
			const result = compute(array);
			resultElem.innerHTML = `${result}`;
			array = [];
		}
	}
}
	
function compute(arr) {
	//get rid of the "=" sign as the last element of the array
	arr.pop();
	const len = arr.length;
	console.log(arr);

	/* 
		Now we will do the arithmetics from left to right
		as we encounter with an operator. For that, we slice
		the array and call arthm() function recursively.
	*/
	let a = arr.slice(0, len-2),
		result = arthm(a, arr[len-1], arr[len-2]);

	if (isNaN(result)) {
		result = "Wrong input";
	} else {
		result = result.toFixed(3);
	}
	
	return result;
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
				return a + b;
			case "-":
				return a - b;
			case "x":
				return a * b;
			case "/":
				return a / b;
	}

}