using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ScenarioAssigner : MonoBehaviour {
	private InputField input;
	// Use this for initialization
	void Start () {
		input = this.gameObject.GetComponent<InputField>();
	}

	
	// Update is called once per frame
	void Update () {
		if ( input.text!="" && Input.GetKey(KeyCode.Return)) {
			print ("enter");
			Scenarios.scenarioNumber = input.text;
			Destroy (this.gameObject);
		}
		//print (""+input.text);
	}
}
