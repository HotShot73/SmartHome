#pragma strict

var UIButtonClicked : boolean = false ;

function cameraview (){
	if(!UIButtonClicked)//if smart home UI is not showing now
		{
			this.GetComponent.<Camera>().rect = new Rect(0.45f,0,1,1);
			UIButtonClicked= true;

		}
	else //is smart home UI is showing now
		{
			this.GetComponent.<Camera>().rect = new Rect(0,0,1,1);
			UIButtonClicked= false;
		}
}

function cameraViewBackButton(){
	if(GameObject.Find("UI Button").GetComponent(UIButton).UILevel==1)
	{
		this.GetComponent.<Camera>().rect = new Rect(0,0,1,1);
			UIButtonClicked= false;
	}

}