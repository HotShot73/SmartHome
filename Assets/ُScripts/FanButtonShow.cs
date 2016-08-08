using UnityEngine;
using System.Collections;

public class FanButtonShow : MonoBehaviour {


	bool UIButtonClicked= false;
	public void ButtonShow ()
	{
		if (!UIButtonClicked) 
		{
			this.gameObject.SetActive(true);
			UIButtonClicked=true;
		
		}
		else
		{
			this.gameObject.SetActive(false);
			UIButtonClicked=false;
			
		}
	}
}
