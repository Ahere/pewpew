#pragma strict
//SHIELD SCRIPT.

//Inspector Variables
var shieldStrength : int =3;

function OnTriggerEnter (other : Collider)
{
if (other.tag == "asteroid")
 {  
  shieldStrength -=1 ;
 
 }
}
function Update () 
{

if (shieldStrength <=0)
{
 Destroy(gameObject);
}

}