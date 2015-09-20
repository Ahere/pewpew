#pragma strict
//WIN Script
//Inspector variables
var winLine        :String = "You WIN ,(O . O)";
var outerRect_left  : float =0.0  ;
var outerRect_top   : float =0.0  ;
var outerRect_width : float =200.0;
var outerRect_height: float =200.0;
var line1Rect_left  : float =10.0 ;
var line1Rect_top   : float =30.0 ;
var line1Rect_width : float =160.0;
var line1Rect_height: float =40.0 ;
var line2Rect_left  : float =60.0 ;
var line2Rect_top   : float =125.0;
var line2Rect_width : float =80.0 ;
var line2Rect_height: float =50.0 ;
var line3Rect_left  : float =60.0 ;
var line3Rect_top   : float =65.0 ;
var line3Rect_width : float =80.0 ;
var line3Rect_height: float =50.0 ;
var sceneManager    : GameObject  ;

function update ()
{

}
 

 
 function OnGUI()
 {
	GUI.BeginGroup(Rect(Screen.width/2 - 100,Screen.height/2-100,200,200));
//Make a box
	
	GUI.Box(Rect(outerRect_left ,outerRect_top, outerRect_width ,outerRect_height),winLine);
//Creators
	GUI.Label(Rect(line1Rect_left ,line1Rect_top , line1Rect_width, line1Rect_height),"Score: " + PlayerPrefs.GetInt("SCORE"));
	
	
   //ADD buttons 
   if (GUI.Button(Rect(line2Rect_left ,line2Rect_top , line2Rect_width, line2Rect_height),"Try Again"))
   {
   Application.LoadLevel("Level01");  //take us to the main menu
   }
   if (GUI.Button(Rect(line3Rect_left ,line3Rect_top , line3Rect_width, line3Rect_height),"Main menu"))
   {
   Application.LoadLevel("ScreenMainMenu");  //take us to the main menu
   }
   
	GUI.EndGroup();
}
function Update () 
{

}