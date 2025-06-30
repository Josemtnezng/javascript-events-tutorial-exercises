// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	
	let stringA = document.getElementById("firstNumber").value;

	let stringB = document.getElementById("secondNumber").value;
	// Your code here
	function calculateSumListener() {

  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const resultInput = document.getElementById('result');

  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const sum = value1 + value2;
  resultInput.value = sum;
}
};
