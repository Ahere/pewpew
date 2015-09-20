#pragma strict
//MAIN MENU SCRIPT.
//INSPECTOR Variables
var outerRect_left   :float = 0.0   ;// GUI INSPECTOR VARIABLES
var outerRect_top    :float = 0.0   ;
var outerRect_width  :float = 100.0 ; 
var outerRect_height :float = 175.0 ;
var startRect_left   :float = 10.0  ;
var startRect_top    :float = 30.0  ;
var startRect_width  :float = 80.0  ;
var startRect_height :float = 30.0  ;
var exitRect_left    :float = 10.0  ;
var exitRect_top     :float = 60.0	;
var exitRect_width   :float = 80.0	;
var exitRect_height  :float = 30.0	;
var creditRect_left  :float = 10.0  ;
var creditRect_top   :float = 90.0	;
var creditRect_width :float = 80.0	;
var creditRect_height:float = 30.0	;
var pageRect_left 	 :float = 10.0  ;
var pageRect_top	 :float = 120.0 ;
var pageRect_width	 :float = 85.0  ;
var pageRect_height  :float = 30.0  ;
var homepage         :String        ;// Homepage.
 //CODE BEGINS!! 
 
function OnGUI()
{

GUI.BeginGroup(Rect(Screen.width/2- 50,Screen.height/2-50,100,175));
//Make a box
GUI.Box(Rect(outerRect_left ,outerRect_top , outerRect_width,outerRect_height),"PEW PEW");
//Add buttons for game navigationct
	if (GUI.Button(Rect(startRect_left ,startRect_top ,startRect_width ,startRect_height),"BEGIN!"))
		{
 	Application.LoadLevel("ScreenLoad");
		}

	if (GUI.Button(Rect(exitRect_left ,exitRect_top ,exitRect_width ,exitRect_height),"EXIT"))
		{
	      Application.Quit();
		}
	if (GUI.Button(Rect(creditRect_left ,creditRect_top ,creditRect_width ,creditRect_height),"CREDITS"))
		{
 	Application.LoadLevel("Screen_Credits");
		}
	if (GUI.Button(Rect(pageRect_left ,pageRect_top ,pageRect_width ,pageRect_height),"HOMEPAGE"))
		{
	 Application.OpenURL (homepage); 
	    }
GUI.EndGroup();
}	    