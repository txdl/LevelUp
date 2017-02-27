#pragma strict

//movement speed
var moveSpeed : float;
//shots per second
var fireRate : float;
//the shot prefab
var shot : GameObject;
//where the shot will be created
var shotSpawn : Transform;
//when the ship dies, generate this thing
var deathExplosion: GameObject;

var accelMomentum: boolean;

//the player ship's Rigidbody (physics component)
private var rb : Rigidbody;
//where player ship audio is coming from
private var shipSounds : AudioSource;

//reference to our GameManager
private var gameMgr: GameManagement;

//tracking and processing player input
private var moveHorizontal: float;
private var moveVertical: float;
private var movement: Vector3;

//time at which next shot will be allowed; automatically adjusted
private var nextFire : float;


function Start () {
	//find the components we'll be accessing
	rb = GetComponent(Rigidbody);
	shipSounds = GetComponent(AudioSource);
	gameMgr = gameObject.Find("GameManager").GetComponent(GameManagement);
}

function Update () {
	//checking for player input and creating shot
	//if (Input.GetButton("Fire1") && Time.time > nextFire){
	if (Input.GetButton("Fire1") && Time.time > nextFire){
		FireShot();
	}
	moveHorizontal = Input.GetAxis("Horizontal");
	moveVertical = Input.GetAxis("Vertical");
	movement = Vector3 (moveHorizontal, 0, moveVertical);
}

function FixedUpdate(){
	if (accelMomentum){
		//acceleration and momentum-based movement
		rb.drag = 1.5;
		rb.AddForce(movement*moveSpeed,ForceMode.Acceleration);
	} else {
		//instantaneous acceleration and deceleration
		rb.drag = 25;
		rb.AddForce(movement*moveSpeed,ForceMode.Impulse);
		if (rb.velocity.magnitude > moveSpeed){
			rb.velocity = rb.velocity.normalized * moveSpeed;
		}
		if (moveHorizontal == 0){
			rb.velocity.x = 0;
		}
		if (moveVertical == 0){
			rb.velocity.y = 0;
		}

	}
}

function FireShot(){
	Instantiate(shot, shotSpawn.position,shotSpawn.rotation);
	shipSounds.Play();
	nextFire = Time.time + 1/fireRate;
}

function OnDestroy(){
	Instantiate(deathExplosion,transform.position,transform.rotation);
	gameMgr.GameOver();
}