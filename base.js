var Limes = 0

function Start() {

	if (Load("LastUsername") == null) {
		console.log("Welcome New Player")
		localStorage.setItem("LastUsername", "NewPlayer")
	}
	else {
		console.log("Welcome " + Load("LastUsername"))
		if (Load(Load("LastUsername")) !== null) {
			Limes = Load(Load("LastUsername"))
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
	localStorage.setItem(Username, JSON.stringify(Limes))
	localStorage.setItem("LastUsername", Username)
}

function LoadGame() {
	Limes = JSON.parse(Load(Load("LastUsername")))
}

function Load(id) {
	return localStorage.getItem(id)
}
