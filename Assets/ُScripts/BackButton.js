#pragma strict
import UnityEngine.UI;
import UnityEngine;

var TVButton : GameObject;
var TVOnButton :GameObject;
var TVOffButton : GameObject;
var LightButton : GameObject;
var LightOnButton :GameObject;
var LightOffButton : GameObject;
var AirConButton : GameObject;
var AirConOnButton :GameObject;
var AirConOffButton : GameObject;
var FanButton : GameObject;
var FanOnButton :GameObject;
var FanOffButton : GameObject;
var BackButton : GameObject;
var UIBackgroundImage : GameObject;
var rend;
var UI: GameObject;
var UIanimator: Animator;
var UIbutton : GameObject;
UIanimator=UI.GetComponent(Animator);
function BackButtonClicked () {
	if(GameObject.Find("UI Button").GetComponent(UIButton).UILevel==1)
	{
		//TVButton.SetActive(false);
		//LightButton.SetActive(false);
		//FanButton.SetActive(false);
		//AirConButton.SetActive(false);
		//BackButton.SetActive(false);
		UIanimator.SetTrigger("down");
		UIbutton.GetComponent(UIButton).UIButtonclicked=false;
		UIBackgroundImage.SetActive(false);
		GameObject.Find("UI Button").GetComponent(UIButton).UIButtonclicked=false;
	}
	if(GameObject.Find("UI Button").GetComponent(UIButton).UILevel==21)
	{
		TVOffButton.SetActive(false);
		TVOnButton.SetActive(false);
		TVButton.SetActive(true);
		//FanButton.SetActive(true);
		AirConButton.SetActive(true);
		LightButton.SetActive(true);
		GameObject.Find("UI Button").GetComponent(UIButton).UILevel=1;
	}
	if(GameObject.Find("UI Button").GetComponent(UIButton).UILevel==22)
	{
		FanOffButton.SetActive(false);
		FanOnButton.SetActive(false);
		TVButton.SetActive(true);
		//FanButton.SetActive(true);
		AirConButton.SetActive(true);
		LightButton.SetActive(true);
		GameObject.Find("UI Button").GetComponent(UIButton).UILevel=1;
	}
	if(GameObject.Find("UI Button").GetComponent(UIButton).UILevel==23)
	{
		//Destroy(LightOffButton.GetComponent(Image));
		//Destroy(LightOffButton.GetComponent(CanvasRenderer));
		LightOffButton.SetActive(false);
		LightOnButton.SetActive(false);
		//Destroy(LightOnButton.GetComponent(Image));
		//Destroy(LightOnButton.GetComponent(CanvasRenderer));
		//LightOnButton.GetComponent(CanvasRenderer).enable=false;
		TVButton.SetActive(true);
		//FanButton.SetActive(true);
		AirConButton.SetActive(true);
		LightButton.SetActive(true);
		GameObject.Find("UI Button").GetComponent(UIButton).UILevel=1;
	}
	if(GameObject.Find("UI Button").GetComponent(UIButton).UILevel==24)
	{
		AirConOffButton.SetActive(false);
		AirConOnButton.SetActive(false);
		TVButton.SetActive(true);
		//FanButton.SetActive(true);
		AirConButton.SetActive(true);
		LightButton.SetActive(true);
		GameObject.Find("UI Button").GetComponent(UIButton).UILevel=1;
	}

}

