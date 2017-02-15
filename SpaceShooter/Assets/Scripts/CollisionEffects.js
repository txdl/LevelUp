#pragma strict

private var gameMgr: GameManagement;
var pointValue: int;

function Start(){
	gameMgr = gameObject.Find("GameManager").GetComponent(GameManagement);
}

function OnCollisionEnter(other:Collision){
	if (other.gameObject.tag == "PlayerShot"){
		gameMgr.AddScore(pointValue);
	}
	Destroy(gameObject);
}