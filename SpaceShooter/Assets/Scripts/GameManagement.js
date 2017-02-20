#pragma strict

var scoreText: GUIText;
var restartText: GUIText;
var gameOverText: GUIText;

var score: float;

function Awake () {
	scoreText.text = "Score: "+score;
	restartText.text = "";
	gameOverText.text = "";
}

function Update () {
	if (Input.GetKeyDown(KeyCode.R)){
		SceneManagement.SceneManager.LoadScene(SceneManagement.SceneManager.GetActiveScene().buildIndex);
	}
}

function AddScore(scoreAmt:int){
	score += scoreAmt;
	scoreText.text = "Score: "+score;
}

function GameOver(){
	restartText.text = "Press 'R' to Restart";
	gameOverText.text = "Game Over :(";
}