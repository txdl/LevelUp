#pragma strict

var shot: GameObject;
var shotSpawn: Transform;
var fireRate: float;
private var shotNoises:AudioSource;

function Start () {
	shotNoises = GetComponent(AudioSource);
	InvokeRepeating("Fire",2,fireRate);
}

function Fire () {
	Instantiate(shot, shotSpawn.position, shotSpawn.rotation);
	shotNoises.Play();
}
