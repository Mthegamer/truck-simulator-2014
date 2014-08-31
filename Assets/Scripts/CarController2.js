var rearWheel1 : WheelCollider;
var rearWheel2 : WheelCollider;
var frontWheel1 : WheelCollider;
var frontWheel2 : WheelCollider;
 
var wheelFL : Transform;
var wheelFR : Transform;
var wheelRL : Transform;
var wheelRR : Transform;
 
var steer_max = 20;
var motor_max = 10;
var brake_max = 100;
 
private var steer = 0;
private var forward = 0;
private var back = 0;
private var motor = 0;
private var brake = 0;
private var reverse = false;
private var speed = 0;
 
function Start() {
rigidbody.centerOfMass = Vector3(0, -0.05, 0);
}
 
function FixedUpdate () {
 
speed = rigidbody.velocity.sqrMagnitude;
steer = Mathf.Clamp(Input.GetAxis("Horizontal"), -1, 1);
forward = Mathf.Clamp(Input.GetAxis("Vertical"), 0, 1);
back = -1 * Mathf.Clamp(Input.GetAxis("Vertical"), -1, 0);
 
if(speed == 0) {
if(back > 0) { reverse = true; }
if(forward > 0) { reverse = false; }
}
 
if(reverse) {
motor = -1 * back;
brake = forward;
} else {
motor = forward;
brake = back;
}
 
rearWheel1.motorTorque = motor_max * motor;
rearWheel2.motorTorque = motor_max * motor;
rearWheel1.brakeTorque = brake_max * brake;
rearWheel2.brakeTorque = brake_max * brake;
 
frontWheel1.steerAngle = steer_max * steer;
frontWheel2.steerAngle = steer_max * steer;
wheelFL.localEulerAngles.y = steer_max * steer;
wheelFR.localEulerAngles.y = steer_max * steer;
 
wheelFR.Rotate(frontWheel1.rpm * -6 * Time.deltaTime, 0, 0);
wheelFL.Rotate(frontWheel2.rpm * -6 * Time.deltaTime, 0, 0);
wheelRR.Rotate(rearWheel1.rpm * -6 * Time.deltaTime, 0, 0);
wheelRL.Rotate(rearWheel2.rpm * -6 * Time.deltaTime, 0, 0);
 
}