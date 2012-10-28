#pragma strict

var moveSpeed : float = 100.0f;
var isMultiplayer : boolean = false;

function Start () {

}

function Update () {
	var translation : float = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;
	//Debug.Log("TankMove() >>> Input.GetAxis = ", Input.GetAxis("Vertical");
	//if (Input.GetButtonDown("Fire1")) {
		transform.Translate(Vector3(0.0, translation, 0.0));
	//}
}