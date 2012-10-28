using UnityEngine;
using System.Collections;

public class TankMove : MonoBehaviour {

	public int i = 1;
	public float move = 10.0f;
	// Update is called once per frame
	void Update () {
		float h = Input.GetAxis("Horizontal") * Time.deltaTime * move;
		float v = Input.GetAxis("Vertical") * Time.deltaTime * move;
		transform.Translate(new Vector3(0, 0, v));
	}
}
