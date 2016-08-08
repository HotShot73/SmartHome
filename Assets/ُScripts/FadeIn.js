#pragma strict

var fadeOutTexture: Texture2D;
var fadeSpeed: float = 2.5f;

private var drawDepth: int = -1000;
private var alpha: float = 1.0f;
private var fadeDir: int = -1;

function OnGUI()
{
	alpha += fadeDir * fadeSpeed * Time.deltaTime;
	
	alpha = Mathf.Clamp01(alpha);
	
	GUI.color = new Color(GUI.color.r, GUI.color.g, GUI.color.b, alpha);
	GUI.depth = drawDepth;
	GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height),fadeOutTexture);
}

function BeginFade (direction: int): float
{
	fadeDir = direction;
	return fadeSpeed;
}

function OnLevelWasLoaded()
{
	BeginFade(-1);
}