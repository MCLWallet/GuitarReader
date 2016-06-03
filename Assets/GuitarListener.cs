using UnityEngine;
using System.Collections;

using MidiJack;

public class GuitarListener : MonoBehaviour
{
	int counter_E = 0;
	int counter_A = 0;
	int counter_D = 0;
	int counter_G = 0;
	int counter_b = 0;
	int counter_E2 = 0;
	


	// Use this for initialization
	void Start ()
	{
	
	}
	
	// Update is called once per frame
	void Update ()
	{
		/*
		 * 
		 * E-String
		 * 
		 */
		// Note: E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,40)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 40).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();
		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,40)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: f
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,41)){
			GameObject.Find("Note_f").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 41).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,41)){
			GameObject.Find("Note_f").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: fis
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,42)){
			GameObject.Find("Note_fis").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 42).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,42)){
			GameObject.Find("Note_fis").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: g
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,43)){
			GameObject.Find("Note_g").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 43).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,43)){
			GameObject.Find("Note_g").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: gis
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,44)){
			GameObject.Find("Note_gis").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 44).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,44)){
			GameObject.Find("Note_gis").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: a
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,45)){
			GameObject.Find("Note_a_E").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 45).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,45)){
			GameObject.Find("Note_a_E").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: ais_E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,46)){
			GameObject.Find("Note_ais_E").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 46).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,46)){
			GameObject.Find("Note_ais_E").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: b_E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,47)){
			GameObject.Find("Note_b_E").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 47).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,47)){
			GameObject.Find("Note_b_E").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: c1_E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,48)){
			GameObject.Find("Note_c1_E").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 48).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,48)){
			GameObject.Find("Note_c1_E").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: cis1_E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,49)){
			GameObject.Find("Note_cis1_E").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 49).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,49)){
			GameObject.Find("Note_cis1_E").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: d1_E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch6,50)){
			GameObject.Find("Note_d1_E").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch6, 50).ToString();
			counter_E++;
			GameObject.Find ("E-String_num").GetComponent<TextMesh>().text=counter_E.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch6,50)){
			GameObject.Find("Note_d1_E").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}

		/*
		 * 
		 * A-String
		 * 
		 */
		// Note: a
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,45)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 45).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,45)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: ais
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,46)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 46).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,46)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: b
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,47)){
			GameObject.Find("Note_b").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 47).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,47)){
			GameObject.Find("Note_b").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: c1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,48)){
			GameObject.Find("Note_c1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 48).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,48)){
			GameObject.Find("Note_c1").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: cis1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,49)){
			GameObject.Find("Note_cis1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 49).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,49)){
			GameObject.Find("Note_cis1").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: d1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,50)){
			GameObject.Find("Note_d1_A").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 50).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,50)){
			GameObject.Find("Note_d1_A").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: dis1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,51)){
			GameObject.Find("Note_dis1_A").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 51).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,51)){
			GameObject.Find("Note_dis1_A").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: e1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,52)){
			GameObject.Find("Note_e1_A").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 52).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,52)){
			GameObject.Find("Note_e1_A").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: f1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,53)){
			GameObject.Find("Note_f1_A").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 53).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,53)){
			GameObject.Find("Note_f1_A").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: fis1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,54)){
			GameObject.Find("Note_fis1_A").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 54).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,54)){
			GameObject.Find("Note_fis1_A").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: g1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch5,55)){
			GameObject.Find("Note_g1_A").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch5, 55).ToString();
			counter_A++;
			GameObject.Find ("A-String_num").GetComponent<TextMesh>().text=counter_A.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch5,55)){
			GameObject.Find("Note_g1_A").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}

		/*
		 * 
		 * D-String
		 * 
		 */
		// Note: d1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,50)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 50).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,50)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: dis1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,51)){
			GameObject.Find("Note_dis1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 51).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,51)){
			GameObject.Find("Note_dis1").GetComponent<Renderer>().enabled = false;
		}
		// Note: e1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,52)){
			GameObject.Find("Note_e1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 52).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,52)){
			GameObject.Find("Note_e1").GetComponent<Renderer>().enabled = false;
		}
		// Note: f1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,53)){
			GameObject.Find("Note_f1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 53).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,53)){
			GameObject.Find("Note_f1").GetComponent<Renderer>().enabled = false;
		}
		// Note: fis1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,54)){
			GameObject.Find("Note_fis1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 54).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,54)){
			GameObject.Find("Note_fis1").GetComponent<Renderer>().enabled = false;
		}
		// Note: g1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,55)){
			GameObject.Find("Note_g1_D").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 55).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,55)){
			GameObject.Find("Note_g1_D").GetComponent<Renderer>().enabled = false;
		}
		// Note: gis1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,56)){
			GameObject.Find("Note_gis1_D").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 56).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,56)){
			GameObject.Find("Note_gis1_D").GetComponent<Renderer>().enabled = false;
		}
		// Note: a1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,57)){
			GameObject.Find("Note_a1_D").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 57).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,57)){
			GameObject.Find("Note_a1_D").GetComponent<Renderer>().enabled = false;
		}
		// Note: ais1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,58)){
			GameObject.Find("Note_ais1_D").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 58).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,58)){
			GameObject.Find("Note_ais1_D").GetComponent<Renderer>().enabled = false;
		}
		// Note: b1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,59)){
			GameObject.Find("Note_b1_D").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 59).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,59)){
			GameObject.Find("Note_b1_D").GetComponent<Renderer>().enabled = false;
		}
		// Note: c2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,60)){
			GameObject.Find("Note_c2_D").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch4, 60).ToString();
			counter_D++;
			GameObject.Find ("D-String_num").GetComponent<TextMesh>().text=counter_D.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,60)){
			GameObject.Find("Note_c2_D").GetComponent<Renderer>().enabled = false;
		}

		/*
		 * 
		 * G-String
		 * 
		 */
		// Note: g1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,55)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 55).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,55)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: gis1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,56)){
			GameObject.Find("Note_gis1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 56).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();


		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,56)){
			GameObject.Find("Note_gis1").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: a1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,57)){
			GameObject.Find("Note_a1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 57).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,57)){
			GameObject.Find("Note_a1").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: ais1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,58)){
			GameObject.Find("Note_ais1").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 58).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,58)){
			GameObject.Find("Note_ais1").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: b1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,59)){
			GameObject.Find("Note_b1_G").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 59).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,59)){
			GameObject.Find("Note_b1_G").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: c2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,60)){
			GameObject.Find("Note_c2_G").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 60).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,60)){
			GameObject.Find("Note_c2_G").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: cis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,61)){
			GameObject.Find("Note_cis2_G").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 61).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,61)){
			GameObject.Find("Note_cis2_G").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: d2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,62)){
			GameObject.Find("Note_d2_G").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 62).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,62)){
			GameObject.Find("Note_d2_G").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: dis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,63)){
			GameObject.Find("Note_dis2_G").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 63).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,63)){
			GameObject.Find("Note_dis2_G").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: e2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,64)){
			GameObject.Find("Note_e2_G").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 64).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,64)){
			GameObject.Find("Note_e2_G").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: f2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch3,65)){
			GameObject.Find("Note_f2_G").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch3, 65).ToString();
			counter_G++;
			GameObject.Find ("G-String_num").GetComponent<TextMesh>().text=counter_G.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch3,65)){
			GameObject.Find("Note_f2_G").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}

		/*
		 * 
		 * H-String
		 * 
		 */
		// Note: b1
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,59)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 59).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,59)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: c2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,60)){
			GameObject.Find("Note_c2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 60).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,60)){
			GameObject.Find("Note_c2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: cis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,61)){
			GameObject.Find("Note_cis2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 61).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,61)){
			GameObject.Find("Note_cis2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: d2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,62)){
			GameObject.Find("Note_d2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 62).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,62)){
			GameObject.Find("Note_d2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: dis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,63)){
			GameObject.Find("Note_dis2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 63).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,63)){
			GameObject.Find("Note_dis2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: e2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,64)){
			GameObject.Find("Note_e2_H").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 64).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,64)){
			GameObject.Find("Note_e2_H").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: f2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,65)){
			GameObject.Find("Note_f2_H").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 65).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,65)){
			GameObject.Find("Note_f2_H").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: fis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,66)){
			GameObject.Find("Note_fis2_H").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 66).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,66)){
			GameObject.Find("Note_fis2_H").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: g2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,67)){
			GameObject.Find("Note_g2_H").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 67).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,67)){
			GameObject.Find("Note_g2_H").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: gis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,68)){
			GameObject.Find("Note_gis2_H").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 68).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,68)){
			GameObject.Find("Note_gis2_H").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: a2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch2,69)){
			GameObject.Find("Note_a2_H").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch2, 69).ToString();
			counter_b++;
			GameObject.Find ("b-String_num").GetComponent<TextMesh>().text=counter_b.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch2,69)){
			GameObject.Find("Note_a2_H").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}

		/*
		 * 
		 * E2-String
		 * 
		 */
		// Note: e2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,64)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 64).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,64)){
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: f2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,65)){
			GameObject.Find("Note_f2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 65).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,65)){
			GameObject.Find("Note_f2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: fis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,66)){
			GameObject.Find("Note_fis2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 66).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,66)){
			GameObject.Find("Note_fis2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: g2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,67)){
			GameObject.Find("Note_g2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 67).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,67)){
			GameObject.Find("Note_g2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: gis2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,68)){
			GameObject.Find("Note_gis2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 68).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,68)){
			GameObject.Find("Note_gis2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: a2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,69)){
			GameObject.Find("Note_a2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 69).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,69)){
			GameObject.Find("Note_a2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: ais2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,70)){
			GameObject.Find("Note_ais2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 70).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,70)){
			GameObject.Find("Note_ais2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: b2
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,71)){
			GameObject.Find("Note_b2").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 71).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,71)){
			GameObject.Find("Note_b2").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: c3
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,72)){
			GameObject.Find("Note_c3").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 72).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,72)){
			GameObject.Find("Note_c3").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: cis3
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,73)){
			GameObject.Find("Note_cis3").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 73).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,73)){
			GameObject.Find("Note_cis3").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}
		// Note: d3
		if (MidiMaster.GetKeyDown(MidiChannel.Ch1,74)){
			GameObject.Find("Note_d3").GetComponent<Renderer>().enabled = true;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text=MidiMaster.GetKey(MidiChannel.Ch1, 74).ToString();
			counter_E2++;
			GameObject.Find ("E2-String_num").GetComponent<TextMesh>().text=counter_E2.ToString();

		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch1,74)){
			GameObject.Find("Note_d3").GetComponent<Renderer>().enabled = false;
			GameObject.Find ("Velocity_num").GetComponent<TextMesh>().text="0";

		}



	}
}

