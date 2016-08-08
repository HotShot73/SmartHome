#pragma strict
var enterance : boolean;
function OnCollisionEnter(other: Collision)
{
	var hit : RaycastHit;
	var v : Vector3;
	if(other.gameObject.tag=="Player"){
	//print("Collision");
	//var fwd = other.transform.TransformDirection (Vector3.forward);
	//	if (other.Raycast (other.transform.position, fwd, 10)) {
	//if (other.Raycast(other.transform.position,other.transform.forward, hit , 2)) {
	
	//if (Input.GetKeyDown(KeyCode.UpArrow)||Input.GetKey(KeyCode.UpArrow)||Input.GetKeyUp(KeyCode.UpArrow)){
	GetComponent.<Animation>().Play("Open");
	enterance= true; 
	//collider.isTrigger=true;
	
	
	
	}
	}
 
//}
function OnTriggerExit(other: Collider)
{
	if(other.gameObject.tag=="Player"){
	GetComponent.<Animation>().Play("Close");
	enterance= false;
	GetComponent.<Collider>().isTrigger=false;
	}
	

}

function Start () {

}

function Update () {

}