#pragma strict

var light1a : GameObject;
var light1b : GameObject;
var light2a : GameObject;
var light2b : GameObject;
var lightsound: AudioClip;
var text2 : Text;
var text2outline : Text;
var text1 : Text;
var text1outline : Text;
var FanOnSwitch: AudioSource;
var Fansound: AudioSource;
var roomcollider: GameObject;
var player : GameObject;
var FanIsOn: boolean = false;
var lightBclicked : boolean = false ;
var FanOffNow : boolean = true;
var task3done :boolean=false;
var ConflictText: GameObject;
var ConflictSound: AudioSource;
var FirstPerson: GameObject;
var ConflictImage: GameObject;
var Wall : GameObject;
var arrowText2: GameObject;
var Conflictarrow: GameObject;

function buttonclicked()
{
var sounds= GetComponents(AudioSource);
	ConflictSound= sounds[2];
	StartCoroutine("OnButtonClicked");
}



 function OnButtonClicked () {
 	FirstPerson.transform.LookAt(light2a.transform);
	GetComponent.<AudioSource>().PlayOneShot(lightsound);
	light1a.SetActive(true);
	light1b.SetActive(true);
	light2a.SetActive(true);
	light2b.SetActive(true);
	task3done=true;
	//LightOffButton.lightIsOn=true;
	//---------
	//yield WaitForSeconds(1);
	//light1a.SetActive(false);
	//light1b.SetActive(false);
	//light2a.SetActive(false);
	//light2b.SetActive(false);
	//lightBclicked=true;
	//ConflictText.GetComponent(Text).color.a=1;
	//ConflictImage.GetComponent(Image).color.a=1;
	//Conflictarrow.GetComponent(Image).color.a=1;
	//ConflictText.SetActive(true);
//ConflictSound.Play();
	//fade();
	//GetComponent.<AudioSource>().PlayOneShot(lightsound);
	//arrowText2.SetActive(true);
	//text2.text="Smart Home decides lights should be off \n because light level was sufficient";
	//text2outline.text="Smart Home decides lights should be off";
	//yield WaitForSeconds(6);
	//arrowText2.SetActive(false);
	text2.text="";
	//text2outline.text="";
	//FirstPerson.transform.LookAt(Wall.transform);
	
	//if (lightBclicked==true)//use this variable for turning on the fan only 
	//the first time light button is clicked
	//{	
		//if (roomcollider.GetComponent.<Collider>().bounds.Contains(player.transform.position))
		//to turn on the fan only if player is in room
		//{
			//if(FanOffNow==true){
	
		//yield WaitForSeconds (1);
//				var sounds = GameObject.Find("Fan").GetComponents(AudioSource);
//				//FanOnSwitch = sounds[0];
//				Fansound=sounds[1];
//				//FanOnSwitch.Play();
//				GameObject.Find("FanMainBone").GetComponent(Animation).Play();
//				Fansound.Play();
//				lightBclicked=false;
//				FanOffNow=false;
//				text2.text="Fan turns on automatically";
//				text2outline.text="Fan turns on automatically";
//				//FanIsOn=true;// to use for turning off the fan on player exit from room
//				yield WaitForSeconds (3);
//				text2.text="";
//				text2outline.text="";
			//}
		//}
	//}

}
function Update(){
	//if(LightOffButton.lightIsOn)
		//			LightOffButton.timeLightIsOn += Time.DeltaTime;
	//

}
function fade()
{
	while(ConflictText.GetComponent(Text).color.a>0)
	{
		ConflictText.GetComponent(Text).color.a-= 0.1 * Time.deltaTime * 2;
		ConflictImage.GetComponent(Image).color.a-= 0.1 * Time.deltaTime * 2;
		Conflictarrow.GetComponent(Image).color.a-=0.1*Time.deltaTime*2;
		yield;
	}
}