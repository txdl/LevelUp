#pragma strict

var playerShip: PlayerShip;
var cameraPositions: Transform[];
var currentCameraPosition: int = 0;
var enemySpawning: EnemySpawning;

function SetPlayerMoveSpeed(newSpeed: float){
	playerShip.moveSpeed = newSpeed;
}

function SetPlayerFireRate(newRate: float){
	playerShip.fireRate = newRate;
}

function SetCameraAngle(nextAngle: boolean){

	if (currentCameraPosition<cameraPositions.length){
		currentCameraPosition++;
	} else {
		currentCameraPosition = 0;
	}
	Camera.main.gameObject.transform.position = cameraPositions[currentCameraPosition].position;
}

function SetEnemySpawnRate(newRate: float){
	enemySpawning.spawnInterval = newRate;
}

function SetJukeStrength(newStrength: float){
	enemySpawning.jukeStrengthToSet = newStrength;
}

function SetEnemyMoveSpeed(newSpeed: float){
	enemySpawning.moveSpeedToSet = newSpeed;
}

function SetEnemyFireRate(newRate: float){
	enemySpawning.moveSpeedToSet = newRate;
}