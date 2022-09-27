Limes = 0

function Start() {

	if (Load("SublimeOriginsLastUsername") == null) {
		Update("Username", "Welcome New Player")
		localStorage.setItem("SublimeOriginsLastUsername", "Username")
	}
	else {
		Update("Username", "Welcome " + Load("SublimeOriginsLastUsername"))
		if (Load(Load("SublimeOriginsLastUsername")) !== null) {
			Limes = Load(Load("SublimeOriginsLastUsername"))
		}
	}
	
	GameLoop()
}

function GameLoop() {
	document.getElementById("LimeCounter").innerHTML = "Limes: " + Limes
	
	window.requestAnimationFrame(GameLoop)
}

function CollectALime() {
	Limes += 1
}

function SaveGame() {
	Username = prompt("To which username?")
	localStorage.setItem("SublimeOrigins" + Username, JSON.stringify(Limes))
	localStorage.setItem("SublimeOriginsLastUsername", "SublimeOrigins" + Username)
}

function LoadFromSaveFile() {
	Username = prompt("To which username?")
	if (Username == null) {
		window.alert("User Doesn't Exist.")
	}
	else {
		Limes = JSON.parse(Load(Load("SublimeOrigins" + Username)))
	}
}


