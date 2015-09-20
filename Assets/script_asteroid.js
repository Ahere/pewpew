#pragma strict
//ASTEROID SCRIPT

//INSPECTOR VARIABLES

var resetPosition :float =-8.0;
var minRandom     :float =-7.0;
var maxRandom     :float = 7.0;
var explosion     :Transform  ;
var sceneManager  :GameObject ;
var shieldFx      :AudioClip  ;
var playerDamageFx:AudioClip  ;
private var asteroidScale  : float = 0.0 ;
private var asteroidSpeed   : float = 4.0 ;

//PRIVATE VARIABLES
function Start () {

}

function Update () 
{

transform.Translate(Vector3.down * Time.deltaTime * asteroidSpeed); // asteroid movment

// Check for end of Screen

if(transform.position.y <= resetPosition)
  {
   ResetEnemy();
   
  }
}

function OnTriggerEnter (other: Collider)
{
if (other.gameObject.tag == "Player")
{
 other.GetComponent(script_Player).lives -= 1;
  //Tell score manager that the playyer has been hit 
sceneManager.transform.GetComponent(script_Manager).SubtractLife();
   
 if(explosion)
 {
 Instantiate(explosion,transform.position,transform.rotation);
 GetComponent.<AudioSource>().clip = playerDamageFx;
 GetComponent.<AudioSource>().Play();
 }//reset position.
 ResetEnemy();
 
 
}
if (other.gameObject.tag == "shield")
{

 if(explosion)
 {
 Instantiate(explosion,transform.position,transform.rotation);
 GetComponent.<AudioSource>().clip = shieldFx;
 GetComponent.<AudioSource>().Play();
 }//reset position.
 ResetEnemy();  
 }
}

function ResetEnemy()
{
transform.position.y = Random.Range(8.0 , 15.0);
transform.position.x = Random.Range(6.0 , -6.0);
asteroidSpeed        = Random.Range(4.0 , 8.0 ); 
asteroidScale        = Random.Range(0.7 , 1.6 );
transform.localScale = Vector3(asteroidScale, asteroidScale ,asteroidScale);

}