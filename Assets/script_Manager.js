#pragma strict
//Scene Manager Script

//Inspector Variable
var gameTime    : int   = 60 ;  // gametime
static var score: int   = 0  ;  // score keeper
static var lives: int   = 3  ;  // lives
var scoreLeft   : float = 10 ;  // Gui Variales  
var scoreTop    : float = 10 ;
var scoreWidth  : float = 100;
var scorehieght : float = 20 ;
var lifeLeft    : float = 130;
var lifeTop     : float = 10 ;
var lifeWidth   : float = 100;
var lifehieght  : float = 20 ;
var timeLeft    : float = 260;
var timeTop     : float = 10 ;
var timeWidth   : float = 100;
var timehieght  : float = 20 ;
var winLeft     : float = 400 ;
var winTop      : float = 10;
var winWidth    : float = 150;
var winhieght   : float = 20 ;
var winScore    : int   = 14 ; // score to reach
function Start () 
{
 InvokeRepeating("CountDown",1.0,1.0); 
}
// Game Loop
function Update () 
{
if (lives <= 0) // Lose screen activator.
{
 PlayerPrefs.SetInt("SCORE",score);          //Score Saver
 Application.LoadLevel("ScreenLose");
 lives = 3;
 
 score = 0;
}
if( score >= winScore )   //Win Screen Activator.
{
 PlayerPrefs.SetInt("SCORE",score);     //Score saver
 Application.LoadLevel("ScreenWin");
 lives = 3;
 score = 0;
}
if( gameTime<=0 && score < winScore )
{
 PlayerPrefs.SetInt("SCORE",score); //Score saver
 Application.LoadLevel("ScreenLose");
 lives = 3;    
 score = 0;
}
}
function CountDown()
{
gameTime-=1 ;
if (gameTime == 0)
{

 CancelInvoke("CountDown");
}
}
function SubtractLife ()  // Life reducer function
{
 lives -=1;
}
function AddScore ()   // Score Adder
{
 score+=1;
}
function OnGUI()   // Interface
{
GUI.Box(Rect (scoreLeft,scoreTop,scoreWidth,scorehieght),"Score:" +score);
GUI.Box(Rect (lifeLeft,lifeTop,lifeWidth,lifehieght),"Lives:" +lives);
GUI.Box(Rect (timeLeft,timeTop,timeWidth,timehieght),"Timeleft:" + gameTime);
GUI.Box(Rect (winLeft,winTop,winWidth,winhieght),"Score to Beat:" + winScore);
}