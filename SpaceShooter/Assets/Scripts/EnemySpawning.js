#pragma strict

var hazards: GameObject[];
var spawnInterval: float;
var hazardAmt: int;
var increaseAfter: int;
var waveNumber: int;
var spawnLine: Transform;
var nextSpawn: float;
var fireRateToSet: float;
var moveSpeedToSet: float;
var jukeStrengthToSet: float;
private var backgroundTimer: float;

function Start(){
	//reset on restart
	waveNumber = 0;
	hazardAmt = 1;
	nextSpawn = 2;
	backgroundTimer = 0;
}

function Update () {
	backgroundTimer += Time.deltaTime;
	if (backgroundTimer > nextSpawn){
		SpawnHazards(hazardAmt);
	}
}

function SpawnHazards (amt:int){
	for (var i = 0; i<amt; i++){
		var hazard: GameObject = hazards[Random.Range(0,hazards.Length)];
		var spawnPosition: Vector3 = Vector3(spawnLine.position.x + Random.Range(-12,12),0,spawnLine.position.z + Random.Range (-2,2));
		var spawnedHazard: GameObject = Instantiate(hazard,spawnPosition,Quaternion.identity);
		
		var hazardMover = spawnedHazard.GetComponent(ObjectMover);
		hazardMover.moveSpeed = moveSpeedToSet;
		
		//check if the hazard has an EnemyShooting component (i.e. it's a ship and not an asteroid)
		if (spawnedHazard.GetComponent(EnemyShooting)){
			hazardMover.jukeStrength = jukeStrengthToSet;
			spawnedHazard.GetComponent(EnemyShooting).fireRate = fireRateToSet;
		}
	}
	if (waveNumber>=increaseAfter && waveNumber % increaseAfter == 0){
		hazardAmt++;
	}
	nextSpawn += spawnInterval;
	waveNumber++;
}