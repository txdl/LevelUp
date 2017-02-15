#pragma strict

var hazards: GameObject[];
var spawnInterval: float;
var hazardAmt: int;
var increaseAfter: int;
var waveNumber: int;
var spawnLine: Transform;
var nextSpawn: float; 

function Update () {
	if (Time.time > nextSpawn){
		SpawnHazards(hazardAmt);
	}
}

function SpawnHazards (amt:int){
	for (var i = 0; i<amt; i++){
		var hazard: GameObject = hazards[Random.Range(0,hazards.Length)];
		var spawnPosition: Vector3 = Vector3(spawnLine.position.x + Random.Range(-12,12),0,spawnLine.position.z + Random.Range (-2,2));
		Instantiate(hazard,spawnPosition,Quaternion.identity);
	}
	if (waveNumber>=increaseAfter && waveNumber % increaseAfter == 0){
		hazardAmt++;
	}
	nextSpawn += spawnInterval;
	waveNumber++;
}