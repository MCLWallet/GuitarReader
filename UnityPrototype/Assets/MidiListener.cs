using UnityEngine;
using System.Collections;


using MidiJack;

public class MidiListener : MonoBehaviour {


	bool eStringLock;
	bool aStringLock;
	bool dStringLock;
	


	// Use this for initialization
	void Start () {
		eStringLock=false;
		aStringLock=false;
		dStringLock=false;
		

	}
	
	// Update is called once per frame
	void Update () {


		/*
		 * 
		 * 	E-String
		 * 
		*/
		// Note: f
		if (MidiMaster.GetKeyDown(MidiChannel.All,53)){
			GameObject.Find("Note_f").GetComponent<Renderer>().enabled = true;
			eStringLock = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,53)){
			GameObject.Find("Note_f").GetComponent<Renderer>().enabled = false;
			eStringLock = false;
		}

		// Note: fis
		if (MidiMaster.GetKeyDown(MidiChannel.All,54)){
			GameObject.Find("Note_fis").GetComponent<Renderer>().enabled = true;
			eStringLock = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,54)){
			GameObject.Find("Note_fis").GetComponent<Renderer>().enabled = false;
			eStringLock = false;
		}

		// Note: g
		if (MidiMaster.GetKeyDown(MidiChannel.All,55)){
			GameObject.Find("Note_g").GetComponent<Renderer>().enabled = true;
			eStringLock = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,55)){
			GameObject.Find("Note_g").GetComponent<Renderer>().enabled = false;
			eStringLock = false;
			
		}

		// Note: gis
		if (MidiMaster.GetKeyDown(MidiChannel.All,56)){
			GameObject.Find("Note_gis").GetComponent<Renderer>().enabled = true;
			eStringLock = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,56)){
			GameObject.Find("Note_gis").GetComponent<Renderer>().enabled = false;
			eStringLock = false;
			
		}

		// Note: ais
		if (MidiMaster.GetKeyDown(MidiChannel.All,70)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = true;
			eStringLock = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,70)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = false;
			eStringLock = false;
			
		}

		// Note: ais_E
		if (MidiMaster.GetKeyDown(MidiChannel.Ch4,58)){
			GameObject.Find("Note_ais_E").GetComponent<Renderer>().enabled = true;
			eStringLock = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.Ch4,58)){
			GameObject.Find("Note_ais_E").GetComponent<Renderer>().enabled = false;
			eStringLock = false;
			
		}

		/*
		 * 
		 * 	A-String
		 * 
		*/


		// Note: ais
		if (MidiMaster.GetKeyDown(MidiChannel.All,58)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,58)){
			GameObject.Find("Note_ais").GetComponent<Renderer>().enabled = false;
		}

		// Note: b
		if (MidiMaster.GetKeyDown(MidiChannel.All,59)){
			GameObject.Find("Note_b").GetComponent<Renderer>().enabled = true;
				
		}

		if (MidiMaster.GetKeyUp(MidiChannel.All,59)){
			GameObject.Find("Note_b").GetComponent<Renderer>().enabled = false;

		}

		// Note: c'
		if (MidiMaster.GetKeyDown(MidiChannel.All,60)){
			GameObject.Find("Note_c1").GetComponent<Renderer>().enabled = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,60)){
			GameObject.Find("Note_c1").GetComponent<Renderer>().enabled = false;

		}

		// Note: cis'
		if (MidiMaster.GetKeyDown(MidiChannel.All,61)){
			GameObject.Find("Note_cis1").GetComponent<Renderer>().enabled = true;
					
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,61)){
			GameObject.Find("Note_cis1").GetComponent<Renderer>().enabled = false;
	
		}

		/*
		 * 
		 * 	D-String
		 * 
		*/


		// Note: dis'
		if (MidiMaster.GetKeyDown(MidiChannel.All,63)){
			GameObject.Find("Note_dis1").GetComponent<Renderer>().enabled = true;
	
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,63)){
			GameObject.Find("Note_dis1").GetComponent<Renderer>().enabled = false;
	
		}

		// Note: e'
		if (MidiMaster.GetKeyDown(MidiChannel.All,64)){
			GameObject.Find("Note_e1").GetComponent<Renderer>().enabled = true;
	
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,64)){
			GameObject.Find("Note_e1").GetComponent<Renderer>().enabled = false;
		}

		// Note: f'
		if (MidiMaster.GetKeyDown(MidiChannel.All,65)){
			GameObject.Find("Note_f1").GetComponent<Renderer>().enabled = true;
		
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,65)){
			GameObject.Find("Note_f1").GetComponent<Renderer>().enabled = false;
	
		}

		// Note: fis'
		if (MidiMaster.GetKeyDown(MidiChannel.All,66)){
			GameObject.Find("Note_fis1").GetComponent<Renderer>().enabled = true;
	
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,66)){
			GameObject.Find("Note_fis1").GetComponent<Renderer>().enabled = false;
	
		}



		/*
		 * 
		 * 	G-String
		 * 
		*/
		// Note: gis'
		if (MidiMaster.GetKeyDown(MidiChannel.All,68)){
			GameObject.Find("Note_gis1").GetComponent<Renderer>().enabled = true;
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,68)){
			GameObject.Find("Note_gis1").GetComponent<Renderer>().enabled = false;
			
		}
		
		// Note: a'
		if (MidiMaster.GetKeyDown(MidiChannel.All,69)){
			GameObject.Find("Note_a1").GetComponent<Renderer>().enabled = true;
		
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,69)){
			GameObject.Find("Note_a1").GetComponent<Renderer>().enabled = false;
			
		}
		
		// Note: ais'
		if (MidiMaster.GetKeyDown(MidiChannel.All,70)){
			GameObject.Find("Note_ais1").GetComponent<Renderer>().enabled = true;
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,70)){
			GameObject.Find("Note_ais1").GetComponent<Renderer>().enabled = false;
		}
		


		/*
		 * 
		 * H-String
		 *
		 */
		// Note: c''
		if (MidiMaster.GetKeyDown(MidiChannel.All,72)){
			GameObject.Find("Note_c2").GetComponent<Renderer>().enabled = true;
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,72)){
			GameObject.Find("Note_c2").GetComponent<Renderer>().enabled = false;
			
		}
		
		// Note: cis''
		if (MidiMaster.GetKeyDown(MidiChannel.All,73)){
			GameObject.Find("Note_cis2").GetComponent<Renderer>().enabled = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,73)){
			GameObject.Find("Note_cis2").GetComponent<Renderer>().enabled = false;
		}

		// Note: d''
		if (MidiMaster.GetKeyDown(MidiChannel.All,74)){
			GameObject.Find("Note_d2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,74)){
			GameObject.Find("Note_d2").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: dis''
		if (MidiMaster.GetKeyDown(MidiChannel.All,75)){
			GameObject.Find("Note_dis2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,75)){
			GameObject.Find("Note_dis2").GetComponent<Renderer>().enabled = false;
			
		}


		/*
		 * 
		 * E-String 2
		 *
		 */

		
		// Note: f''
		if (MidiMaster.GetKeyDown(MidiChannel.All,77)){
			GameObject.Find("Note_f2").GetComponent<Renderer>().enabled = true;
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,77)){
			GameObject.Find("Note_f2").GetComponent<Renderer>().enabled = false;
		}
		
		// Note: fis''
		if (MidiMaster.GetKeyDown(MidiChannel.All,78)){
			GameObject.Find("Note_fis2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,78)){
			GameObject.Find("Note_fis2").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: g''
		if (MidiMaster.GetKeyDown(MidiChannel.All,79)){
			GameObject.Find("Note_g2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,79)){
			GameObject.Find("Note_g2").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: gis''
		if (MidiMaster.GetKeyDown(MidiChannel.All,80)){
			GameObject.Find("Note_gis2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,80)){
			GameObject.Find("Note_gis2").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: a''
		if (MidiMaster.GetKeyDown(MidiChannel.All,81)){
			GameObject.Find("Note_a2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,81)){
			GameObject.Find("Note_a2").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: ais''
		if (MidiMaster.GetKeyDown(MidiChannel.All,82)){
			GameObject.Find("Note_ais2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,82)){
			GameObject.Find("Note_ais2").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: b''
		if (MidiMaster.GetKeyDown(MidiChannel.All,83)){
			GameObject.Find("Note_b2").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,83)){
			GameObject.Find("Note_b2").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: c'''
		if (MidiMaster.GetKeyDown(MidiChannel.All,84)){
			GameObject.Find("Note_c3").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,84)){
			GameObject.Find("Note_c3").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: cis'''
		if (MidiMaster.GetKeyDown(MidiChannel.All,85)){
			GameObject.Find("Note_cis3").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,85)){
			GameObject.Find("Note_cis3").GetComponent<Renderer>().enabled = false;
			
		}
		// Note: d'''
		if (MidiMaster.GetKeyDown(MidiChannel.All,86)){
			GameObject.Find("Note_d3").GetComponent<Renderer>().enabled = true;
			
			
		}
		if (MidiMaster.GetKeyUp(MidiChannel.All,86)){
			GameObject.Find("Note_d3").GetComponent<Renderer>().enabled = false;
			
		}

	}
}
