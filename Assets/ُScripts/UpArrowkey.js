#pragma strict
import UnityEngine.UI;
import UnityEngine.EventSystems;
private var motor : CharacterMotor;
public var rotationSpeed = 50.0f;
public var speed = 0.05f;
public var firstperson: GameObject;
public var uparrowbutton: Button;

function ONUpClick ()
{
firstperson.transform.Translate (0, 0, 1 * 5 * Time.deltaTime);
}

//function OnGUI()
//{
//var NewRect : Rect = Rect(386,-210,50,50);
//if(NewRect.Contains(Event.current.mousePosition))
//Debug.Log("I am in");
 //if(Event.current.type==EventType.MouseDown && Event.current.button ==0)
 //{
// firstperson.transform.Translate(0,0,1*5*Time.deltaTime);
 ///}
//}
