#pragma strict

var playerShip: PlayerShip;
var cameraPositions: Transform[];
var currentCameraPosition: int = 0;
var enemySpawning: EnemySpawning;
var changeText: GUIText;

var playerMoveSpeedInc = 2;
var playerFireRateInc = 0.5;
var enemySpawnRateInc = 0.05;
var enemyMoveSpeedInc = 1;
var enemyFireRateInc = 0.2;
var jukeStrengthInc = 0.2;

function IncreasePlayerMoveSpeed(spdAdj: String){
	playerShip.moveSpeed += playerMoveSpeedInc;
	changeText.text = "Player move speed set to "+playerShip.moveSpeed;
}

function DecreasePlayerMoveSpeed(spdAdj: String){
	playerShip.moveSpeed -= playerMoveSpeedInc;
	changeText.text = "Player move speed set to "+playerShip.moveSpeed;
}

function IncreasePlayerFireRate(rateAdj: String){
	playerShip.fireRate += playerFireRateInc;
	changeText.text = "Player fire rate set to "+playerShip.fireRate;
}

function DecreasePlayerFireRate(rateAdj: String){
	playerShip.fireRate -= playerFireRateInc;
	changeText.text = "Player fire rate set to "+playerShip.fireRate;
}

function NextCameraAngle(nextAngle: String){

	if (currentCameraPosition<cameraPositions.length-1){
		currentCameraPosition++;
	} else {
		currentCameraPosition = 0;
	}
	Camera.main.gameObject.transform.position = cameraPositions[currentCameraPosition].position;
	Camera.main.gameObject.transform.rotation = cameraPositions[currentCameraPosition].rotation;
}

function IncreaseEnemySpawnRate(rateAdj: String){
	enemySpawning.spawnInterval -= enemySpawnRateInc;
	changeText.text = "Enemy spawn interval set to "+enemySpawning.spawnInterval;
}

function DecreaseEnemySpawnRate(rateAdj: String){
	enemySpawning.spawnInterval += enemySpawnRateInc;
	changeText.text = "Enemy spawn interval set to "+enemySpawning.spawnInterval;
}

function IncreaseJukeStrength(jukeAdj: String){
	enemySpawning.jukeStrengthToSet += jukeStrengthInc;
	changeText.text = "Enemy juke strength set to "+enemySpawning.jukeStrengthToSet;
}

function DecreaseJukeStrength(jukeAdj: String){
	enemySpawning.jukeStrengthToSet -= jukeStrengthInc;
	changeText.text = "Enemy juke strength set to "+enemySpawning.jukeStrengthToSet;
}

function IncreaseEnemyMoveSpeed (spdAdj: String){
	enemySpawning.moveSpeedToSet += enemyMoveSpeedInc;
	changeText.text = "Enemy move speed set to "+enemySpawning.moveSpeedToSet;
}

function DecreaseEnemyMoveSpeed (spdAdj: String){
	enemySpawning.moveSpeedToSet -= enemyMoveSpeedInc;
	changeText.text = "Enemy move speed set to "+enemySpawning.moveSpeedToSet;
}

function IncreaseEnemyFireRate(rateAdj: String){
	enemySpawning.fireRateToSet += enemyFireRateInc;
	changeText.text = "Enemy fire rate set to "+enemySpawning.fireRateToSet;
}

function DecreaseEnemyFireRate(rateAdj: String){
	enemySpawning.fireRateToSet -= enemyFireRateInc;
	changeText.text = "Enemy fire rate set to "+enemySpawning.fireRateToSet;
}

function TogglePlayerInvincibility (invinc: String){
	playerShip.gameObject.GetComponent(CollisionEffects).invincibility = !playerShip.gameObject.GetComponent(CollisionEffects).invincibility;
	changeText.text = "Player invincibility set to "+playerShip.gameObject.GetComponent(CollisionEffects).invincibility;
}

function RigidbodyMovementSwitch (newMove: String){
	playerShip.accelMomentum = !playerShip.accelMomentum;
	changeText.text = "Acceleration-based control set to "+playerShip.accelMomentum;
}