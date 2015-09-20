#pragma strict
// Inspector variables
var outerRect_left  : float =0.0  ;
var outerRect_top   : float =0.0  ;
var outerRect_width : float =200.0;
var outerRect_height: float =200.0;
var line1Rect_left  : float =10.0 ;
var line1Rect_top   : float =30.0 ;
var line1Rect_width : float =160.0;
var line1Rect_height: float =40.0 ;
var line2Rect_left  : float =10.0 ;
var line2Rect_top   : float =60.0 ;
var line2Rect_width : float =160.0;
var line2Rect_height: float =70.0 ;
var line3Rect_left  : float =10.0 ;
var line3Rect_top   : float =90.0 ;
var line3Rect_width : float =160.0;
var line3Rect_height: float =100.0;
var line4Rect_left  : float =10.0 ;
var line4Rect_top   : float =120.0;
var line4Rect_width : float =160.0;
var line4Rect_height: float =130.0;
var waitTime        : float =6.0;

function Update ()

 {
	if (Input.GetKeyDown("space"))
	 {
		 Application.LoadLevel("Level01");
	 }
	else
	 {
		WaitTime();
	 }
 }
 function OnGUI()
 {
	GUI.BeginGroup(Rect(Screen.width/2 - 100,Screen.height/2-100,200,200));
//Make a box
	
	GUI.Box(Rect(outerRect_left ,outerRect_top, outerRect_width ,outerRect_height),"INSTRUCTIONS");
//Game Instructions.
	GUI.Label(Rect(line1Rect_left ,line1Rect_top , line1Rect_width, line1Rect_height),"Arrow Keys to Move");
	GUI.Label(Rect(line2Rect_left ,line2Rect_top , line2Rect_width, line2Rect_height),"Space to shoot");
	GUI.Label(Rect(line3Rect_left ,line3Rect_top , line3Rect_width, line3Rect_height),"Esc to Exit");
	GUI.Label(Rect(line4Rect_left ,line4Rect_top , line4Rect_width, line4Rect_height),"Press Space when ready"); 

	GUI.EndGroup();
 }
function WaitTime()
{
 yield WaitForSeconds (waitTime);
 Application.LoadLevel("Level01");
}
