#pragma strict
var FanOnSwitch: AudioSource;
var Fansound: AudioSource;

function OnButtonClicked () {
var sounds = GameObject.Find("Fan").GetComponents(AudioSource);
FanOnSwitch = sounds[0];
Fansound=sounds[1];

FanOnSwitch.Play();
StartCoroutine(MyCoroutine());

GameObject.Find("FanMainBone").GetComponent(Animation).Play();
Fansound.Play();
}

function Update () {

}
function MyCoroutine ()
{
	yield WaitForSeconds(4);
}