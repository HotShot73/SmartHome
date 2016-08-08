#pragma strict

var TVOnButton: GameObject;
var TVOffButton : GameObject;
var BackButton : GameObject;
var FanButton : GameObject;
var LightButton : GameObject;
var AirConButton : GameObject;
var FirstPerson : GameObject;
var TV: GameObject;


function TVButtonClicked ()
{	FirstPerson.transform.LookAt(TV.transform);
	TVOnButton.SetActive(true);
	TVOffButton.SetActive(true);
	BackButton.SetActive(true);
	FanButton.SetActive(false);
	LightButton.SetActive(false);
	AirConButton.SetActive(false);
	GameObject.Find("UI Button").GetComponent(UIButton).UILevel=21;//21 means it is showing TV on off buttons and 22 means it s showing Fan on off button
}

function Start () {

}

function Update () {

}