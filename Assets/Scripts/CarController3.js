var rearWheel1 : WheelCollider;
var rearWheel2 : WheelCollider;
var frontWheel1 : WheelCollider;
var frontWheel2 : WheelCollider;
var vertInput : float;
public var coins : int;
public var COG : UnityEngine.Vector3;

function Update()
{
	transform.rigidbody.centerOfMass = COG;
	vertInput = Input.GetAxis("Vertical") * 100;
	rearWheel1.motorTorque = vertInput;
	rearWheel2.motorTorque = vertInput;
	frontWheel1.motorTorque = vertInput;
	frontWheel2.motorTorque = vertInput;
	if (Input.GetKeyUp(KeyCode.F))
	{
		transform.rotation.x = 0;
		transform.rotation.y = 0;
		transform.rotation.z = 0;
	}
}

function OnTriggerEnter (col : Collider)
{
   	if(col.gameObject.tag == "Coin")
   	{
   		coins ++;
       	Destroy(col.gameObject);
   	}
}

function OnGUI ()
{
	GUI.color = Color.black;
	GUI.Label (Rect (10, 10, 100, 20), "Coins:" + coins);
}