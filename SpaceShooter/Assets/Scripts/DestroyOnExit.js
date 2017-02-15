#pragma strict

function OnTriggerExit(other: Collider){
	Destroy(other.gameObject);
}
