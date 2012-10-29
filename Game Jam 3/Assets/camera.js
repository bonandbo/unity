#pragma strict

var panSpeed: float = 10.0f;
var dolly: boolean = false;

var zoomInterval:float = 10.0f;
var zoomRatio:float = 5.0f;
var cam:Camera;

var moveDirection:Vector3;
var isMoving: boolean = false;
var destination: Vector3;
var moveSpeed:float = 5.0f;
private var moveDistance:Vector3;

function Start () {
	cam = GetComponent(Camera);
	var player = GameObject.FindGameObjectWithTag("Player").transform.position;
	MoveTo(player);
}

function LateUpdate () {
	if(isMoving)
	{
		Move();
	}
	else
	{
		UpdatePan();
		UpdateZoom();
	}
}

function UpdatePan(){
	if(Input.GetAxisRaw("Horizontal")<0)
		transform.position.x += panSpeed * Time.deltaTime;
	else if(Input.GetAxisRaw("Horizontal")>0)
		transform.position.x -= panSpeed * Time.deltaTime;
	
	if(Input.GetAxisRaw("Vertical")>0)
		transform.position.y += panSpeed * Time.deltaTime;
	else if(Input.GetAxisRaw("Vertical")<0)
		transform.position.y -= panSpeed * Time.deltaTime;
}

function UpdateZoom(){
if(dolly)
{
	if(Input.GetAxisRaw("Mouse ScrollWheel")>0)
		transform.position.z -= zoomInterval;
	else if (Input.GetAxisRaw("Mouse ScrollWheel")<0)
		transform.position.z += zoomInterval;
}
else 
{	
	 
	if(Input.GetAxisRaw("Mouse ScrollWheel")>0)
		cam.fieldOfView -= zoomInterval/zoomRatio;
	else if (Input.GetAxisRaw("Mouse ScrollWheel")<0)
		cam.fieldOfView += zoomInterval/zoomRatio;
	
}
}

function MoveTo(dest: Vector3)
{
destination = dest;
destination.z = transform.position.z;
isMoving = true;
}

function Move(){
	moveDirection = destination - transform.position;
	moveDistance = moveDirection.normalized * moveSpeed * Time.deltaTime;
	if(moveDistance.magnitude < moveDirection.magnitude)
		transform.Translate(moveDistance,Space.World);
	else if(moveDistance.magnitude >= moveDirection.magnitude)
	{
		transform.position = destination;
		isMoving = false;
	}
}
