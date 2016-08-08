var lightsound: AudioClip;
var airconditionersound : AudioClip;
var text1 : Text;
var text1outline : Text;
var airconditioner : ParticleSystem;
var text2 : Text;
var text2outline : Text;
var AirConditioner : GameObject;
var FanOnSwitch: AudioSource;
var Fansound: AudioSource;
var roomcollider: GameObject;
var player : GameObject;
var FanIsOn: boolean = false;
var FanOffNow : boolean = true;
var Fan : GameObject;
var FanMainBone: GameObject;
var jalousiDownNow : boolean = true;
var jalousie : GameObject;
var jalousie2 : GameObject;
var task4done=false;
var ConflictText: GameObject;
var ConflictSound: AudioSource;
var FirstPerson: GameObject;
var ConflictImage: GameObject;
var Conflictarrow: GameObject;

function buttonclicked()
{
var sounds= GetComponents(AudioSource);
	ConflictSound= sounds[2];	

	StartCoroutine("OnButtonClicked");
}



function OnButtonClicked () 
{	FirstPerson.transform.LookAt(AirConditioner.transform);
	GetComponent.<AudioSource>().PlayOneShot(lightsound);
	airconditioner.gameObject.SetActive(true);
	AirConditioner.GetComponent(AudioSource).GetComponent.<AudioSource>().Play();
	task4done=true;
	yield WaitForSeconds(1);
	GetComponent.<AudioSource>().PlayOneShot(lightsound);
	airconditioner.gameObject.SetActive(false);
	ConflictText.GetComponent(Text).color.a=1;
	ConflictImage.GetComponent(Image).color.a=1;
	Conflictarrow.GetComponent(Image).color.a=1;
	ConflictText.SetActive(true);
ConflictSound.Play();
	fade();

	AirConditioner.GetComponent(AudioSource).GetComponent.<AudioSource>().Stop();
	text2.text="Smart Home decides air conditioner should not be on \n because the room temperature is appropriate";
	text2outline.text="Smart Home decides air conditioner should not be on \n because the room temperature is appropriate";
	yield WaitForSeconds(7);
	text2.text="";
	text2outline.text="";
	
	//if (roomcollider.GetComponent.<Collider>().bounds.Contains(player.transform.position))
	//{
		//if(jalousiDownNow==true)
		//{
//			var sounds = jalousie.GetComponents(AudioSource);
//			var sounds2 = jalousie2.GetComponents(AudioSource);
//				//FanOnSwitch = sounds[0];
//				jalousieUpSound=sounds[0];
//				jalousie2UpSound=sounds2[0];
//				//FanOnSwitch.Play();
//				jalousie.GetComponent.<Animation>()["roller1_half_up"].speed= 1;
//				jalousie.GetComponent(Animation).Play();
//				jalousie2.GetComponent.<Animation>()["roller_half_up"].speed= 1;
//				jalousie2.GetComponent(Animation).Play();
//				sounds[0].GetComponent.<AudioSource>().Play();
//				sounds2[0].GetComponent.<AudioSource>().Play();
////				//lightBclicked=false;
//				jalousiDownNow=false;
//				text2.text="Roller blind goes up automatically";
//				text2outline.text="Roller blind goes up automatically";
////				//FanIsOn=true;// to use for turning off the fan on player exit from room
//				yield WaitForSeconds (4);
//				text2.text="";
//				text2outline.text="";
//				
				
//				var fansounds = Fan.GetComponents(AudioSource);
//				//FanOnSwitch = sounds[0];
//				Fansound=fansounds[1];
//				//FanOnSwitch.Play();
//				FanMainBone.GetComponent(Animation).Play();
//				Fansound.Play();
//				//lightBclicked=false;
//				FanOffNow=false;
//				text1.text="Fan turns on automatically";
//				text1outline.text="Fan turns on automatically";
//				//FanIsOn=true;// to use for turning off the fan on player exit from room
//				yield WaitForSeconds (4);
//				text1.text="";
//				text1outline.text="";
		//}
	//}
//	if (roomcollider.collider.bounds.Contains(player.transform.position))
//	{
//		if(FanOffNow==true)
//		{
//			var sounds = Fan.GetComponents(AudioSource);
//				//FanOnSwitch = sounds[0];
//				Fansound=sounds[1];
//				//FanOnSwitch.Play();
//				FanMainBone.GetComponent(Animation).Play();
//				Fansound.Play();
//				//lightBclicked=false;
//				FanOffNow=false;
//				text2.text="Fan turns on automatically";
//				text2outline.text="Fan turns on automatically";
//				//FanIsOn=true;// to use for turning off the fan on player exit from room
//				yield WaitForSeconds (3);
//				text2.text="";
//				text2outline.text="";
//		}
//	}
}
function fade()
{
	while(ConflictText.GetComponent(Text).color.a>0)
	{
		ConflictText.GetComponent(Text).color.a-= 0.05 * Time.deltaTime * 2;
		ConflictImage.GetComponent(Image).color.a-= 0.05 * Time.deltaTime * 2;
		Conflictarrow.GetComponent(Image).color.a-= 0.05 * Time.deltaTime * 2;
		yield;
	}
}
