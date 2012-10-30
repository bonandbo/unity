#pragma strict

var fullWidth : float = 800;
 
private var currentPower : float;
 
var isIncreasing : boolean = false;
 
var isShooting : boolean = false;
 
var increasingSpeed : float = 500;
 

function Start(){
  guiTexture.pixelInset.width = 0;
}
 
function Update () {
 
  if(!isShooting && Input.GetButtonDown("Jump")){
    isIncreasing = true;
  }
 
  if(!isShooting && Input.GetButtonUp("Jump")){
     isIncreasing = false;
     Shoot(currentPower);
  }
 
  if(isIncreasing){
     currentPower += Time.deltaTime * increasingSpeed;
     currentPower = Mathf.Clamp(currentPower, 0, fullWidth);
     guiTexture.pixelInset.width = currentPower;
  }
}

function Shoot(power : float){
   isShooting  = true;
    
   guiTexture.pixelInset.width = 0;
   currentPower = 0;
   
   isShooting = false;
}