function onClick(event) {
	var obj = document.getElementById("username");
	// Con jquery es muy sencillo saber si un input esta a invalid, de momento
	// obviamos la validación de formulario
	if (obj.value.length > 0) {
		// De momento asumimos que el navegador soporta webstorage
		localStorage.setItem('user', obj.value);
		window.location = 'main.html';
	}
}
