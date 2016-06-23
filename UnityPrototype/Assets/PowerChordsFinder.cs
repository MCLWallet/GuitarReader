using UnityEngine;
using System.Collections;

using MidiJack;
using NAudio.Midi;

public class PowerChordsFinder : MonoBehaviour
{
	MidiIn midiIn;
	bool monitoring;
	int midiInDevice;
	string[] devices;

	// Use this for initialization
	void Start ()
	{
		devices = new string[MidiIn.NumberOfDevices];

		for (int i = 0; i < MidiIn.NumberOfDevices; i++){
			devices[i] = MidiIn.DeviceInfo(i).ProductName;
		}

		Debug.Log (devices);
	}

	// Update is called once per frame
	void Update ()
	{
	
	}
}
