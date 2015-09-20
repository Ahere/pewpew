#pragma strict
//PLAYER SCRIPT


//INSPECTOR VARIABLES
	var playerSpeedVert  : float = 5.0;   // vertical   speed
    var playerSpeedHorz  : float = 5.0;   // horizontal speed
    var HorPlayerMaxRange: float = 6.0;   // horizontal max range
    var HorPlayerMinRange: float =-6.0;   // horizontal min range
    var VerPlayerMaxRange: float = 4.0;   // Vertical max range 
    var VerPlayerMinRange: float =-4.0;   // Vertical min range
    var projectile		 : Transform  ;   // transform of the projectile
    var socketProjectile : Transform  ;   // transform for the shooting socket
    var lives            : int   = 3  ;   // Player lives
    var shieldNum        : int   = 4  ;   // shield variable 
    var shieldMesh       : Transform  ;   // transform of the shield mesh to appear
    var sheildActivator  : KeyCode    ;   // Sheild activator assinger
   
//PRIVATE VARIABLES
private  var repClone         : boolean = false; 


function Start () {

  }
	
	

function Update ()
{
 // Player Controllers
  var transV : float = Input.GetAxis("Vertical")   * playerSpeedVert * Time.deltaTime;    // Used to control the player movment y axis
  var transH : float = Input.GetAxis("Horizontal") * playerSpeedHorz * Time.deltaTime;    // Used to control the player movment y axis
  
  transform.Translate(transH,transV,0);
  
  // when player position is equal to "x " the number equals "x"
  
  transform.position.x = Mathf.Clamp(transform.position.x,HorPlayerMinRange,HorPlayerMaxRange);  // Range of player in game screen
  transform.position.y = Mathf.Clamp(transform.position.y,VerPlayerMinRange,VerPlayerMaxRange);  // Range of player in game screen
  
  //Create A Bullet
  
 if(Input.GetKeyDown("space"))
 {
 
 Instantiate(projectile,socketProjectile.position, socketProjectile.rotation);
 GetComponent.<AudioSource>().Play();
 }
  
 if(Input.GetKeyDown(sheildActivator))
 { 
 if(!repClone) 
  {
  var shieldOn = Instantiate(shieldMesh,transform.position , transform.rotation);
  shieldOn.transform.parent = gameObject.transform;  //parenting shield to player.
  repClone = true;         
 
  }
 }
}
