function dropdowntoggle {
	var x = document.getElementsByClassName("hide");

	if(x.style.display == 'none'){
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}