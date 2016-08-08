using UnityEngine;
using System.Collections;


public class changeCemraview : MonoBehaviour {
	bool UIButtonClicked= false;

 public void cameraView ()//change the main camera viewport to half of the screen 
	{
	if(!UIButtonClicked)//if smart home UI is not showing now
		{
			this.GetComponent<Camera>().rect = new Rect(0.5f,0,1,1);
			UIButtonClicked= true;

		}
	else //is smart home UI is showing now
		{
			this.GetComponent<Camera>().rect = new Rect(0,0,1,1);
			UIButtonClicked= false;
		}

	}

//public void cameraViewBackButton()
//{
	
		//if (GameObject.Find("UI Button").GetComponent<UIButton>().UILevel == 1)
		//{
		//	this.camera.rect = new Rect(0,0,1,1);
		//	UIButtonClicked= false;
		//}
//}
}