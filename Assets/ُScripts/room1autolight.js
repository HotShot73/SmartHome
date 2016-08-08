#pragma strict
var light1a : GameObject;
var light1b : GameObject;
var light2a : GameObject;
var light2b : GameObject;
var lightsound: AudioClip;
var airconditionersound : AudioClip;
var text1 : Text;
var text1outline : Text;
var airconditioner : ParticleSystem;
var text2 : Text;
var text2outline : Text;
var text3 : Text;
var text3outline : Text;
var Fan: GameObject;
var FanMainBone: GameObject;
var FanOffSwitch: AudioSource;
var Fansound: AudioSource;
var FanOffNow: boolean=false;
var AirConOnButton: GameObject;
var jalousie : GameObject;
var jalousie2 : GameObject;
var jalousiDownNow : boolean = true;
var task2done : boolean=false ;
var LightOnButton: GameObject;
var tvOnButton: GameObject;
var AirConditionerOnButton: GameObject;
var OnButtonClicks : GameObject;
var UseKeyboardText:GameObject;
var ArrowKeysImage: GameObject;
var FirstPerson: GameObject;
var FirstPersonTransform : Transform;
var Wall : GameObject;
var arrowText3: GameObject;
var UI: GameObject;
var UIanimator: Animator;
var UIbutton: GameObject;
UIanimator=UI.GetComponent(Animator);
var ArrowKeysText: GameObject;
//var TestTransform : Transform;
function Start()
{
	//FirstPersonTransform=FirstPerson.transform;
}
function airconditionerAutoTurnOn()
{
	yield WaitForSeconds (2);
	GetComponent.<AudioSource>().PlayOneShot(lightsound);
	airconditioner.gameObject.SetActive(true);
	GameObject.Find("AirConditioner").GetComponent(AudioSource).GetComponent.<AudioSource>().Play();
		text1.text="airconditioner turns on automatically";
		text1outline.text="airconditioner turns on automatically";
		yield WaitForSeconds (2);
		text1.text="";
		text1outline.text="";
}
function airconditionerAutoTurnOff()
{
	yield WaitForSeconds (2);
	GetComponent.<AudioSource>().PlayOneShot(lightsound);
	airconditioner.gameObject.SetActive(false);
	GameObject.Find("AirConditioner").GetComponent(AudioSource).GetComponent.<AudioSource>().Stop();
	GetComponent.<AudioSource>().PlayOneShot(lightsound);		
	text1.text="airconditioner turns off automatically";
	text1outline.text="airconditioner turns off automatically";
	yield WaitForSeconds (4);
	text1.text="";
	text1outline.text="";
}
function jalousiPullUpAuto()
{			
			FirstPersonTransform=FirstPerson.transform;
			Debug.Log(FirstPersonTransform.rotation.y + "and" + FirstPerson.transform.rotation.y);
			FirstPerson.transform.LookAt(jalousie.transform);
			Debug.Log(FirstPersonTransform.rotation.y + "and" + FirstPerson.transform.rotation.y);
			var sounds = jalousie.GetComponents(AudioSource);
			var sounds2 = jalousie2.GetComponents(AudioSource);
//			//FanOnSwitch = sounds[0];
//			jalousieUpSound=sounds[0];
//			jalousie2UpSound=sounds2[0];
//			FanOnSwitch.Play();
			jalousie.GetComponent.<Animation>()["roller1_half_up"].speed= 1;
			jalousie.GetComponent(Animation).Play();
			jalousie2.GetComponent.<Animation>()["roller_half_up"].speed= 1;
			jalousie2.GetComponent(Animation).Play();
			sounds[0].GetComponent.<AudioSource>().Play();
			sounds2[0].GetComponent.<AudioSource>().Play();
//			//lightBclicked=false;
			jalousiDownNow=false;
			arrowText3.SetActive(true);
			text3.text="window blinds roll up automatically";
			//text3outline.text="window blinds roll up automatically";
//			//FanIsOn=true;// to use for turning off the fan on player exit from room
			yield WaitForSeconds (6);
			text3.text="";
			text3outline.text="";
			arrowText3.SetActive(false);
			FirstPerson.transform.LookAt(Wall.transform);
			if(!UIbutton.GetComponent(UIButton).UIButtonclicked){
			UIanimator.SetTrigger("Up");
			UIbutton.GetComponent(UIButton).UIButtonclicked=true;}
			Debug.Log(FirstPersonTransform.rotation.y + "and" + FirstPerson.transform.rotation.y);
			//FirstPerson.transform.rotation.y=FirstPersonTransform.rotation.y;
			Debug.Log(FirstPersonTransform.rotation.y + "and" + FirstPerson.transform.rotation.y);
		//	TestTransform=FirstPersonTransform;
			
				
}

function jalousiePullDownAuto()
{
	var soundsj = jalousie.GetComponents(AudioSource);
	var soundsj2 = jalousie2.GetComponents(AudioSource);
//	jalousieUpSound=soundsj[0];
//	jalousie2UpSound=soundsj2[0];
	jalousie.GetComponent.<Animation>()["roller1_half_up"].speed= -1;
	jalousie.GetComponent(Animation).Play();
	jalousie2.GetComponent.<Animation>()["roller_half_up"].speed= -1;
	jalousie2.GetComponent(Animation).Play();
	soundsj[0].GetComponent.<AudioSource>().Play();
	soundsj2[0].GetComponent.<AudioSource>().Play();
//	jalousieUpSound.Play();
//	jalousie2UpSound.Play();
	
	text3.text="Window blinds roll down automatically";
	text3outline.text="Window blinds roll down automatically";
	yield WaitForSeconds (5);
	text3.text="";
	text3outline.text="";
	//GameObject.Find("AirConOnButton").GetComponent(airconditionerOnButton).jalousiDownNow=true;
	jalousiDownNow=false;			
}


function start ()
{
	//text1= text1.GetComponent(UI.Text);
	//text1outline= text1outline.GetComponent(UI.Text);
	//text1.text="";
	//text1outline.text="";
	
	yield WaitForSeconds (3);
		if(jalousiDownNow==true)
		{
			
			//jalousiPullUpAuto();
			task2done=true;
		}
	
//	if(FanOffNow)
//		{
//			var sounds = Fan.GetComponents(AudioSource);
//			FanOffSwitch = sounds[0];
//			Fansound=sounds[1];
//			FanOffSwitch.Play();
//			Fansound.Play();
//			FanMainBone.GetComponent(Animation).Play();
////			AirConOnButton.GetComponent(airconditionerOnButton).FanOffNow=true;
//			text3.text="Fan turns off automatically";
//			text3outline.text="Fan turns off automatically";
//			yield WaitForSeconds (4);
//			text3.text="";
//			text3outline.text="";
//		}
	
}

function OnTriggerEnter(other: Collider)
{
	if(other.gameObject.name=="room1collider")
	{
		ArrowKeysText.SetActive(false);
		yield WaitForSeconds (4);
		if(jalousiDownNow==true)
		{
		
			//jalousiPullUpAuto();
			task2done=true;
		}
		
	
	}

}

function OnTriggerExit(other: Collider)
{
	if(other.gameObject.name=="room1collider")
	{
		//airconditionerAutoTurnOff();
//		FanOffNow=AirConOnButton.GetComponent(airconditionerOnButton).FanOffNow;
//		if(!FanOffNow)
//		{
//			var sounds = GameObject.Find("Fan").GetComponents(AudioSource);
//			FanOffSwitch = sounds[0];
//			Fansound=sounds[1];
//
//			FanOffSwitch.Play();
//			Fansound.Stop();
//			GameObject.Find("FanMainBone").GetComponent(Animation).Stop();
//			AirConOnButton.GetComponent(airconditionerOnButton).FanOffNow=true;
//			text3.text="Fan turns off automatically";
//			text3outline.text="Fan turns off automatically";
//			yield WaitForSeconds (4);
//			text3.text="";
//			text3outline.text="";
//		}
		//jalousiDownNow= AirConOnButton.GetComponent(airconditionerOnButton).jalousiDownNow;
		yield WaitForSeconds (3);
		if(!jalousiDownNow)
		{
			//jalousiePullDownAuto();
		}
		
	}
}	
function Update ()
{
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
      	var hit : RaycastHit;
      	if(!task2done)
      	{
      	if ( Input.GetMouseButtonDown(0)){
      		if(Physics.Raycast(ray,hit))
      		{ 
      			 if(hit.collider.name == "DoorAnimation")
      			 {
      			 	//ArrowKeysImage.SetActive(true);
      			 	UseKeyboardText.SetActive(true);
      			 	
      			 }
		
			}
			}
		}
		if((task2done && (OnButtonClicks.GetComponent(LightOnButtonClicked).task3done))&& (OnButtonClicks.GetComponent(airconditionerOnButton).task4done)&& (tvOnButton.GetComponent(TVOnButton).task5done))
		{
		
			StartCoroutine ("MainMenue");
		}

}

function MainMenue()
{
		yield WaitForSeconds(6);
		Application.LoadLevel(2);
					
}