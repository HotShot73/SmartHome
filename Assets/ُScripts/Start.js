import UnityEngine.UI;
var background : GameObject;
var loadText : Text;
var progressBar : GameObject;
var loadProgress: int = 0;

function Start ()
{
	background.SetActive(false);
	//loadText.SetActive(false);
	progressBar.SetActive(false);
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
	progressBar.SetActive(true);
	var floatloadProgress : float = loadProgress;
	progressBar.transform.localScale= new Vector3(floatloadProgress,-30,0);
	loadText.text="Loading Progress " + loadProgress + "%";
	
	var async : AsyncOperation;
	 async = Application.LoadLevelAsync(1);
	while (!async.isDone)
	{
		loadProgress= parseInt(async.progress*100); // async.progress give us the value 0 to 1 that what the loading progress is
		loadText.text="Loading Progress " + loadProgress + "%";
		progressBar.transform.localScale= Vector3(async.progress,-30,0);
		yield;
	}
	
}

function goFade ()
{
	var fadeTime: float = GameObject.Find("Fade").GetComponent(FadeIn).BeginFade(1);
	yield WaitForSeconds(fadeTime);
	Application.LoadLevel(1);
}
//var isquitBtn = false;
//function OnMouseEnter()//it works if box collider is exited 
//{var text: Text;
//	text=GetComponent(UI.Text);
//	text.color=Color.red;
//	
//}
//function OnMouseExit()//it works if box collider is exited 
//{
//var text: Text;
//	text=GetComponent(UI.Text);
//	text.color=Color.white;
//	
//	
//	
//}
//
//function OnMouseUp()
//{
////	if(isquitBtn){
////	Application.Quit();}
////	else 
////	{
//		Application.LoadLevel(1);
////	}
//	
//}