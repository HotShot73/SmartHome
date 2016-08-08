 #pragma strict
import UnityEngine.UI;

var UILevel : int = 1 ;
var TVButton : GameObject;
var TVOnButton :GameObject;
var TVOffButton : GameObject;
var FanButton : GameObject;
var FanOnButton :GameObject;
var FanOffButton : GameObject;
var LightButton : GameObject;
var LightOnButton :GameObject;
var LightOffButton : GameObject;
var BackButton : GameObject;
var UIButtonclicked : boolean;
var UIBackgroundImage : GameObject;
var AirConButton : GameObject;
var AirConOnButton :GameObject;
var AirConOffButton : GameObject;
UIButtonclicked = false; 
var UI: GameObject;
var UIanimator: Animator;
UIanimator=UI.GetComponent(Animator);


function UIbuttonclicked () {

	if (UILevel==1 && (!UIButtonclicked) )
	{
	
		//FanButton.SetActive(true);
		AirConButton.SetActive(true);
		TVButton.SetActive(true);
		BackButton.SetActive(true);
		LightButton.SetActive(true);
		//UIBackgroundImage.SetActive(true);
		UIButtonclicked=true;
		UIanimator.SetTrigger("Up");
	}
	else if (UILevel==1 &&  (UIButtonclicked) )
	{ 
		//LightButton.SetActive(false);
		//TVButton.SetActive(false);
		//AirConButton.SetActive(false);
		//FanButton.SetActive(false);
		//BackButton.SetActive(false);
		
		//UIBackgroundImage.SetActive(false);
		UIanimator.SetTrigger("down");
		UIButtonclicked=false;
		
	}
	else if (UILevel==21 && (!UIButtonclicked))//if it is in tv setting
	{
		TVOffButton.SetActive(true);
		TVOnButton.SetActive(true);
		TVButton.SetActive(true);
		BackButton.SetActive(true);
		//UIBackgroundImage.SetActive(true);
		UIButtonclicked=true;
		
	}
	else if (UILevel==21 && (UIButtonclicked))
	{
		//TVOffButton.SetActive(false);
		//TVOnButton.SetActive(false);
		//TVButton.SetActive(false);
		//BackButton.SetActive(false);
		//UIBackgroundImage.SetActive(false);
		UIButtonclicked=false;
		UIanimator.SetTrigger("down");
	}
	else if (UILevel==22 && (!UIButtonclicked))//if it is in fan setting
	{
		FanOffButton.SetActive(true);
		FanOnButton.SetActive(true);
		FanButton.SetActive(true);
		BackButton.SetActive(true);
		//UIBackgroundImage.SetActive(true);
		UIButtonclicked=true;
		
	}
	else if (UILevel==22 && (UIButtonclicked))
	{
	//	FanOffButton.SetActive(false);
	//	FanOnButton.SetActive(false);
	//	FanButton.SetActive(false);
	//	BackButton.SetActive(false);
		UIBackgroundImage.SetActive(false);
		UIButtonclicked=false;
		UIanimator.SetTrigger("down");
	}
		else if (UILevel==23 && (!UIButtonclicked))//if it is in light setting
	{
		LightOffButton.SetActive(true);
		LightOnButton.SetActive(true);
		LightButton.SetActive(true);
		BackButton.SetActive(true);
		//UIBackgroundImage.SetActive(true);
		UIButtonclicked=true;
		
	}
	else if (UILevel==23 && (UIButtonclicked))
	{
		//LightOffButton.SetActive(false);
		//LightOnButton.SetActive(false);
		//LightButton.SetActive(false);
		///BackButton.SetActive(false);
		//UIBackgroundImage.SetActive(false);
		UIButtonclicked=false;
		UIanimator.SetTrigger("down");
	}
	else if (UILevel==24 && (!UIButtonclicked))//if it is in AirCon Setting
	{
		AirConOnButton.SetActive(true);
		AirConOffButton.SetActive(true);
		AirConButton.SetActive(true);
		BackButton.SetActive(true);
		//UIBackgroundImage.SetActive(true);
		UIButtonclicked=true;
		
	}
	else if (UILevel==24 && (UIButtonclicked))
	{
		//AirConOnButton.SetActive(false);
		//AirConOffButton.SetActive(false);
		//AirConButton.SetActive(false);
		//BackButton.SetActive(false);
		UIBackgroundImage.SetActive(false);
		UIButtonclicked=false;
		UIanimator.SetTrigger("down");
	}
}