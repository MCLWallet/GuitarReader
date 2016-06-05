using UnityEngine;
using System.Collections;

using MidiJack;
using Sanford.Multimedia.Midi;

public class PowerChordsFinder : MonoBehaviour
{
	/*
	InputDevice inDevice = new InputDevice(0);
	ChannelStopper stopper = new ChannelStopper();
	*/



	// Use this for initialization
	void Start ()
	{
		//Debug.Log(inDevice.DeviceID);
		OutputDevice output = new OutputDevice(0);
		ChannelMessage message = new ChannelMessage(ChannelCommand.NoteOn, 0, 60, 100);

		output.Send (message);

		System.Threading.Thread.Sleep(100);

		message = new ChannelMessage(ChannelCommand.NoteOff, 0, 60, 100);
		output.Send(message);

	}

	// Update is called once per frame
	void Update ()
	{
	
	}
}
