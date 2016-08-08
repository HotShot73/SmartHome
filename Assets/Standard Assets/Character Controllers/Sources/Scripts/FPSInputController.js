private var motor : CharacterMotor;
public var rotationSpeed = 50.0f;
public var speed = 50.0f;

// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
}

// Update is called once per frame
function Update () {
	// Get the input vector from keyboard or analog stick
	var directionVector = new Vector3(0, 0, Input.GetAxis("Vertical"));
	transform.Rotate(Vector3.up, Input.GetAxis("Horizontal") * rotationSpeed * Time.deltaTime);
	
	
	//if (Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S)){ 
         //transform.Translate(0, 0, -1* speed * Time.deltaTime);
     //}
   //if (Input.GetKey (KeyCode.UpArrow) || Input.GetKey(KeyCode.W)) {
       //transform.Translate (0, 0, 1 * speed * Time.deltaTime);
    //}
//    if(Input.GetButton("uparrow")){
    //transform.Translate(0, 0, -1* speed * Time.deltaTime);}
     if (Input.GetKey(KeyCode.RightArrow)|| Input.GetKey(KeyCode.D)) {
         transform.Rotate(0, 1, 0);
     }
     if (Input.GetKey (KeyCode.LeftArrow)|| Input.GetKey(KeyCode.A)) {
         transform.Rotate(0, -1, 0);
     }
	
	
	if (directionVector != Vector3.zero) {
		// Get the length of the directon vector and then normalize it
		// Dividing by the length is cheaper than normalizing when we already have the length anyway
		var directionLength = directionVector.magnitude;
		directionVector = directionVector / directionLength;
		
		// Make sure the length is no bigger than 1
		directionLength = Mathf.Min(1, directionLength);
		
		// Make the input vector more sensitive towards the extremes and less sensitive in the middle
		// This makes it easier to control slow speeds when using analog sticks
		directionLength = directionLength * directionLength;
		
		// Multiply the normalized direction vector by the modified length
		directionVector = directionVector * directionLength;
	}
	
	// Apply the direction to the CharacterMotor
	motor.inputMoveDirection = transform.rotation * directionVector;
	motor.inputJump = Input.GetButton("Jump");
}

// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
