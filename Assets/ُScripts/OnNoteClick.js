#pragma strict
public var output : String = "";
public var NoteText : Text;
 var Delay : float = 0.005;  // 10 characters per sec.
 private var Text : String[];
 public var doubleSpace : boolean = false;
 public var Note : String[];
 public var Note2 : String[];
 public var clickedonce : boolean = false;
 public var MouseImage: GameObject;
 public var KeyboardImage: GameObject;
 public var StartButton : GameObject;
 Note=["Try to do following actions in the asked order in Smart Home","1- Enter the house","2- Use UI to turn on the light","3- Use UI to turn on the air conditioner","4- Use UI to turn on the TV"];
 Note2=[" " ,"Rotate on mouse clicked			"," ","Use your keyboard arrows to go back and forth"];
 
 
 
 function StartNow(){
 StartRightNow();
 }
 
 function StartRightNow()
 {
  if(!clickedonce)
 {
 clickedonce=true;
 WriteText(Note);
 yield WaitForSeconds(6);
 WriteText(Note2);
 yield WaitForSeconds(0.5);
 MouseImage.SetActive(true);
  yield WaitForSeconds(1);
 KeyboardImage.SetActive(true);
 yield WaitForSeconds(1.5);
 StartButton.SetActive(true);
 }
 }
 
 function WriteText(aText : String[]) {
     output = "";
     Text = aText;
 //   TypeText();
    StartCoroutine("TypeText");
 }
 
 function TypeText () {
    for (var word : String in Text) {
       for (var letter in word.ToCharArray()) {
          NoteText.text += letter;
          yield WaitForSeconds (0.01);
       }
       NoteText.text += "\n";
       if (doubleSpace)
          NoteText.text += "\n";
        
    }
    //StartButton.SetActive(true);
 }

@script RequireComponent(GUIText)