#pragma strict

var power : float = 0.1;

function Update () {
	transform.position = Vector3(254,-8.915156,253.1392);
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		transform.localScale += Vector3( 0.0, power, 0.0 );
		power += 0.01;
		
	}
}