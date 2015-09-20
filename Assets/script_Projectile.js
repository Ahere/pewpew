#pragma strict
//PROJECTILE  SCRIPT

//INSPECTOR VARIABLES
var bulletSpeed   :float =15.0;
var destroy_Y	  :float =10.0;
var minRandom     :float =-7.0;
var maxRandom     :float = 7.0;
var explosion     :Transform  ;
var sceneManager  :GameObject ;
var fxSound       :AudioClip  ;
//PRIVATE VARIABLES

function Start () {

}

function Update () 
{
 transform.Translate(Vector3.up*bulletSpeed* Time.deltaTime);
 if(transform.position.y>= destroy_Y)
 {
  Destroy(gameObject);
 }

}

function OnTriggerEnter(other: Collider)
{
 //check for the asteroid
 if (other.gameObject.tag == "asteroid")
 {
  other.transform.position.y = 8;                           // randomises position aftr asteroid is hit
  other.transform.position.x = Random.Range(minRandom,maxRandom);
  
  // explosion Creator
 if(explosion)
{
  Instantiate(explosion, transform.position, transform.rotation);    // explosion creator
  AudioSource.PlayClipAtPoint(fxSound,transform.position);
}
   //Tell score manager that the asteroid has been hit.
   sceneManager.transform.GetComponent(script_Manager).AddScore();

  // destroy bullet
  Destroy(gameObject);
  
 
 }

}