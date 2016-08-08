import UnityEngine.UI;
var enterance : boolean;
var text1 : Text;
var text1outline : Text;
var text2 : Text;
var text2outline : Text;
var opendoor :AudioClip;
var closedoor :AudioClip;
var ArrowKeysText: GameObject;
var ArrowKeysImage:GameObject;
var arrowtext1 : GameObject;
var arrowtext2: GameObject;



function Start ()
{
	text1= text1.GetComponent(UI.Text);
	text1outline= text1outline.GetComponent(UI.Text);
	text1.text="";
	text1outline.text="";
	text2= text2.GetComponent(UI.Text);
	text2outline= text2outline.GetComponent(UI.Text);
	text2.text="";
	text2outline.text="";
}

function OnTriggerEnter(other: Collider)
{
	var hit : RaycastHit;
	//var v : Vector3;
	var fwd = transform.TransformDirection (Vector3.forward);
	if(Physics.Raycast(transform.position, transform.forward, hit, 5 ))
	//if (Physics.Raycast (transform.position, fwd, 10))
	{
		if(other.gameObject.name=="DoorAnimation")
		{	
		//var fwd = other.transform.TransformDirection (Vector3.forward);
		//if (Input.GetKeyDown(KeyCode.UpArrow)||Input.GetKey(KeyCode.UpArrow)||Input.GetKeyUp(KeyCode.UpArrow)){
			ArrowKeysImage.SetActive(false);
			ArrowKeysText.SetActive(false);
			other.gameObject.GetComponent.<Animation>().Play("Open");
			GetComponent.<AudioSource>().PlayOneShot(opendoor);
			//other.gameObject.animation.PlayQueued("doorcolliderdisable", QueueMode.CompleteOthers);
			enterance= true;
			arrowtext1.SetActive(true);
			text1.text="the door is opened to you automatically";
			text1outline.text="the door is opened to you automatically";
			
			yield WaitForSeconds (4);
			text1.text="";
			text1outline.text="";
			arrowtext1.SetActive(false);
			
		//other.gameObject.transform.FindChild("ColliderBody").collider.isTrigger=true;//maybe we can write by getchil
	
		}
	}
}
function OnTriggerExit(other: Collider)
{
	if(other.gameObject.name=="DoorAnimation"&& enterance==true)
	{
		other.gameObject.GetComponent.<Animation>().Play("Close");
		GetComponent.<AudioSource>().PlayOneShot(closedoor);
		enterance= false;
		arrowtext2.SetActive(true);
		text2.text="the door is closed behinde you automatically";
		text2outline.text="the door is closed behinde you automatically";
		yield WaitForSeconds (4);
		text2.text="";
		text2outline.text="";
		arrowtext2.SetActive(false);
	//other.gameObject.transform.FindChild("ColliderBody").collider.isTrigger=false;
	}	
}
 