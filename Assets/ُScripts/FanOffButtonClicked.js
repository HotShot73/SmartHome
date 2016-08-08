
var FanOffSwitch: AudioSource;
var Fansound: AudioSource;
function OnButtonClicked () {
var sounds = GameObject.Find("Fan").GetComponents(AudioSource);
FanOffSwitch = sounds[0];
Fansound=sounds[1];

FanOffSwitch.Play();
Fansound.Stop();
GameObject.Find("FanMainBone").GetComponent(Animation).Stop();
//GameObject.Find("Fan").GetComponent(AudioSource).audio.Stop();

}
