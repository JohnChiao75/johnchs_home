var isPopupVisible = false;

document.querySelector('.goto').addEventListener('click', function() {
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');
    if (isPopupVisible) {
	    // Hide the popup and overlay
	    popup.style.display = 'none';
	    overlay.style.display = 'none';
    } else {
	    // Show the popup and overlay
		popup.style.display = 'grid';
	    overlay.style.display = 'block';
    }
    isPopupVisible = !isPopupVisible;
});

  // Click outside the popup to hide it
document.addEventListener('click', function(event) {
	var popup = document.querySelector('.popup');
	if (isPopupVisible && !popup.contains(event.target) && event.target != document.querySelector('.goto')) {
		popup.style.display = 'none';
		document.querySelector('.overlay').style.display = 'none';
		isPopupVisible = false;
	}
});