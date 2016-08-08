using UnityEngine;
using System.Collections;

public class LightOffButton : MonoBehaviour {
	public GameObject light1a;
	public GameObject light2a;
	public GameObject light2b;
	public GameObject light1b;
	public static float timeLightIsOn =0;
	public static bool lightIsOn = false;
	// Use this for initialization
	void Start () {
	
	}
	public void OnButtonClicked () {
		
		light1a.SetActive (false);
		light1b.SetActive (false);
		light2a.SetActive (false);
		light2b.SetActive (false);
		timeLightIsOn = 0;
		lightIsOn = false;
	}
	// Update is called once per frame
	void Update () {
	
	}
}
