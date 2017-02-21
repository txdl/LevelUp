#pragma strict

var moveSpeed: float;
var randomSpin: boolean;
var moveNJuke: boolean;
var jukeInterval: float;
var jukeStrength: float = 1;
var deathExplosion: GameObject;
private var rb: Rigidbody;
private var timeToJuke: float;

function Start () {
	rb = GetComponent(Rigidbody);
	rb.AddForce(-Vector3.forward*moveSpeed,ForceMode.Impulse);
	if (randomSpin){
		rb.angularVelocity = Random.insideUnitSphere * moveSpeed/2;
	}
}

function Update () {
	if (moveNJuke && Time.time > timeToJuke){
		Juke();
	}
}

function Juke(){
	//Debug.Log("Juke");
	var jukeForce: float = moveSpeed * jukeStrength;
	rb.AddForce(Vector3.right*Random.Range(-jukeForce, jukeForce),ForceMode.Impulse);
	timeToJuke += jukeInterval;
}

function OnDestroy(){
	if (deathExplosion != null){
		Instantiate(deathExplosion,transform.position,transform.rotation);
	}
}