using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
public class UPArrowkey : MonoBehaviour {
	public GameObject firstperson;
	public float maxSpeed = 10f;
	bool buttonHeld = false;
	CharacterController chController ;


	// Use this for initialization

	public void pressed (BaseEventData eventData)
	{
		buttonHeld = true;
	}
	public void notpressed(BaseEventData eventData)
	{
		buttonHeld = false;
	}
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (buttonHeld)
		{
			// Do stuff
			//Debug.Log ("click");
			// Move Character
			//character.transform.Translate (0, 0, 1 * 5 * Time.deltaTime);
		//	chController= firstperson.GetComponent(CharacterController);
			chController=GetComponent<CharacterController>();
			Vector3 forward = transform.TransformDirection(Vector3.forward);
			chController.SimpleMove(forward);
		} 
		//else
			//Debug.Log ("not click");
	}
	

}
