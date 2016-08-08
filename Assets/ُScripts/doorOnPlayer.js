#pragma strict
var enterance : boolean;
function OnTriggerEnter(other: Collider)
{
	
	var hit : RaycastHit;
	if(other.gameObject.tag=="door"){
	//if(Physics.Raycast(transform.position, transform.forward, hit, 3 )){
	
	other.gameObject.GetComponent.<Animation>().Play("Open");
	
	enterance= true; 
	 other.isTrigger=true;
	
	}
 
}
function OnTriggerExit(other: Collider)
{
	if(other.gameObject.tag=="door"&& enterance==true){
	other.gameObject.GetComponent.<Animation>().Play("Close");
	enterance= false;
	other.isTrigger=false;
	
	}
	

}