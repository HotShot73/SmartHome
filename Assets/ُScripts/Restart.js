#pragma strict

import UnityEngine.UI;
var background : GameObject;
var loadText : Text;
var loadProgress: int = 0;

function Start ()
{
	background.SetActive(false);
	//loadText.SetActive(false);

}

function StartClicked()
{
	
	//StartCoroutine("goFade");
	StartCoroutine("DisplayLoadingScreen");
}

function DisplayLoadingScreen ()
{
	background.SetActive(true);
	//loadText.SetActive(true);
	
	var floatloadProgress : float = loadProgress;
	//progressBar.transform.localScale= new Vector3(floatloadProgress,-30,0);
	loadText.text="Loading Progress " + loadProgress + "%";
	
	var async : AsyncOperation;
	 async = Application.LoadLevelAsync(0);
	while (!async.isDone)
	{
		loadProgress= parseInt(async.progress*100); // async.progress give us the value 0 to 1 that what the loading progress is
		loadText.text="Loading Progress " + loadProgress + "%";
		//progressBar.transform.localScale= Vector3(async.progress,-30,0);
		yield;
	}
	
}