using UnityEngine;
using System.Collections;

using MidiJack;

public class MidiChannelSeeker : MonoBehaviour
{

	// Use this for initialization
	void Start ()
	{

	}

	// Update is called once per frame
	void Update ()
	{


		Debug.Log ("E-String: " + MidiMaster.GetKey(MidiChannel.Ch6, 46));
		Debug.Log ("A-String: " + MidiMaster.GetKey(MidiChannel.Ch5, 46));
		Debug.Log ("D-String: " + MidiMaster.GetKey(MidiChannel.Ch4, 56));
		Debug.Log ("G-String: " + MidiMaster.GetKey(MidiChannel.Ch3, 56));
		Debug.Log ("b-String: " + MidiMaster.GetKey(MidiChannel.Ch2, 60));
		Debug.Log ("e-String: " + MidiMaster.GetKey(MidiChannel.Ch1, 64));

		


		/*
		// Note: ais
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,46)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,46)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = false;

		}

		// Note: ais_E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,46)){
			GameObject.Find("Note_ais_E").GetComponent<Renderer>().enabled = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,46)){
			GameObject.Find("Note_ais_E").GetComponent<Renderer>().enabled = false;

		}
	*/
	}
}
