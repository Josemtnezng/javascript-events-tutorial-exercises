window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here
const greenButton = document.getElementById('green-btn');

greenButton.addEventListener('click', () => {
 
  alert('woohoo!');
});