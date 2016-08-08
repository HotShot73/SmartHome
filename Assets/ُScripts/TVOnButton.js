#pragma strict
var task5done : boolean = false;
var FirstPerson: GameObject;
var TV : GameObject;

function OnButtonClicked () {
FirstPerson.transform.LookAt(TV.transform);
task5done=true;
}

