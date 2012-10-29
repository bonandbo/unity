using UnityEngine;
using System.Collections;

public class tankShooter : MonoBehaviour {

	public Rigidbody vienDan;
  public float power;
	
	// Update is called once per frame
	void Update () {

    power += 50.0f;
    
    if (Input.GetButtonDown("Jump")) {
      power = 1000.0f;
    }
 
    if (Input.GetButtonUp("Jump")) {
      Rigidbody dan = Instantiate( vienDan, transform.position, transform.rotation) as Rigidbody;
      dan.name = "VienDan";
      if ( power >= 5000.0f )
        power = 5000.0f;
      dan.AddForce(Vector3.left * (power));
    } 
  }
}
