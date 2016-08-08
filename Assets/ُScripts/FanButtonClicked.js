#pragma strict

var FanOnButton: GameObject;
var FanOffButton : GameObject;
var BackButton : GameObject;
var TVButton : GameObject;
var LightButton :GameObject;


function FanButtonClicked ()
{
	FanOnButton.SetActive(true);
	FanOffButton.SetActive(true);
	BackButton.SetActive(true);
	TVButton.SetActive(false);
	LightButton.SetActive(false);
	GameObject.Find("UI Button").GetComponent(UIButton).UILevel=22;//21 means it is showing TV on off buttons and 22 means it s showing Fan on off button
}