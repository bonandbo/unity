using UnityEngine;
using System.Collections;

public class tankShooter : MonoBehaviour {

	public Rigidbody vienDan;
	
	// Update is called once per frame
	void Update () {
		if (Input.GetButtonUp("Jump")) {
			Rigidbody dan = Instantiate( vienDan, transform.position, transform.rotation) as Rigidbody;
			dan.name = "VienDan";
			dan.AddForce(Vector3.left * (4000));
		}
	}
	
	void OnTriggerEnter(Collider other) {
		Destroy(other.gameObject);
	}
}
