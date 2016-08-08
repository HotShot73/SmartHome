#pragma strict

var LightOnButton: GameObject;
var LightOffButton : GameObject;
var BackButton : GameObject;
var FanButton : GameObject;
var TVButton : GameObject;
var AirConButton : GameObject;
var FirstPerson: GameObject;
var Lights : GameObject;
var TempTransform : Transform;


function LightButtonClicked ()
{	
	TempTransform=FirstPerson.transform;
	Debug.Log(TempTransform.rotation.y + "and" + FirstPerson.transform.rotation.y);
	FirstPerson.transform.LookAt(Lights.transform);
	//LightOnButton.AddComponent(Image);
	//LightOnButton.AddComponent(CanvasRenderer);
	LightOnButton.SetActive(true);
	//LightOffButton.AddComponent(Image);
	//LightOffButton.AddComponent(CanvasRenderer);
	LightOffButton.SetActive(true);
	BackButton.SetActive(true);
	AirConButton.SetActive(false);
	FanButton.SetActive(false);
	TVButton.SetActive(false);
	//GameObject.Find("UI Button").GetComponent(UIButton).UILevel=23;//21 means it is showing TV on off buttons and 22 means it s showing Fan on off button
	//and 23 means it is showing light on off button
}