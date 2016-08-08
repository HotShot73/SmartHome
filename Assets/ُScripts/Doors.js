

function Update () {
	var hit : RaycastHit;
	//check if we are colliding
	if(Physics.Raycast(transform.position, transform.forward, hit, 1 ))
	{ 
	
		//... With a door
		if(hit.collider.gameObject.name=="MainBone")
		{
			hit.collider.gameObject.GetComponent.<Animation>().Play("opendoor");
		}
	}
}
