#pragma strict

var lifetime: float;

function Start () {
	Destroy(gameObject,lifetime);
}

function OnDisable (){
	Destroy(gameObject);
}