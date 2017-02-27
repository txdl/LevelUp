#pragma strict

private var gameMgr: GameManagement;
var pointValue: int;
var invincibility: boolean;

function Start(){
	gameMgr = gameObject.Find("GameManager").GetComponent(GameManagement);
}

function OnCollisionEnter(other:Collision){
	if (!invincibility){
		if (other.gameObject.tag == "PlayerShot"){
			gameMgr.AddScore(pointValue);
		}
		if (gameObject.tag == "Player" && other.gameObject.tag == "Boundary"){
			return;
		} else {
			Destroy(gameObject);
		}
	}
}