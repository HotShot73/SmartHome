using UnityEngine;
using System.Collections;



public class TVAudio : MonoBehaviour {
	public AudioClip audioOn; 

	public void TVOn () {
		GetComponent<AudioSource>().loop = true;
		GetComponent<AudioSource>().clip = audioOn;
		GetComponent<AudioSource>().Play ();

	}
	

	public void TVOff () {
	
	}
}
