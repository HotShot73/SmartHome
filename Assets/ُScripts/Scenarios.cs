using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System.Threading;

public class Scenarios : MonoBehaviour {
	public static string scenarioNumber ="";
	private Text message;
	private float myTimer=0.0f;
	private int numberOfTimes=0;
	private float totalTimer=0.0f;
	private float duration = -1.0f;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		//print (scenarioNumber);
		if (scenarioNumber == "1") {
			//Scenario1 ();
			if (numberOfTimes == 0) {
				myTimer = 25.0f;
				numberOfTimes++;
			}
			if (myTimer > -0.9f) {
				if (myTimer > 0) {
					myTimer -= Time.deltaTime;
				} else {
					duration = 3.0f;
					message = GameObject.FindGameObjectsWithTag ("Messages") [0].GetComponent<Text> ();
					message.text = "The lamp has been on for " + ((int)LightOffButton.timeLightIsOn).ToString () + "seconds";
					myTimer = 25;
				}
			}
			if (duration > -0.9f) {
				print ("fuck");
				if (duration > 0)
					duration -= Time.deltaTime;
				else {
					message = GameObject.FindGameObjectsWithTag ("Messages") [0].GetComponent<Text> ();
					message.text = "";
					duration = -1;
				}
			}
		}
		totalTimer += Time.deltaTime;
	}

}
