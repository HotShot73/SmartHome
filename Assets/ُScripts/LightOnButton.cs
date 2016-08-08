using UnityEngine;
using System.Collections;

public class LightOnButton : MonoBehaviour {
	public GameObject light1a;
	public GameObject light2a;
	public GameObject light2b;
	public GameObject light1b;
	// Use this for initialization
	void Start () {

	}
	public void OnButtonClicked () {

		light1a.SetActive (true);
		light1b.SetActive (true);
		light2a.SetActive (true);
		light2b.SetActive (true);
		LightOffButton.timeLightIsOn = 0;
		LightOffButton.lightIsOn = true;
	}
	// Update is called once per frame
	void Update () {
		if (LightOffButton.lightIsOn)
			LightOffButton.timeLightIsOn += Time.deltaTime;
	}
}
