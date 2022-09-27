function Load(id) {
	return localStorage.getItem(id)
}

function Update(id, content) {
	document.getElementById(id).innerHTML = content
}