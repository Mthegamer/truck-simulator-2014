public var Target : Transform;
public var Distance : float = 10f;

function LateUpdate ()
{
	transform.position.x = Distance;
	transform.position.y = Target.position.y;
	transform.position.z = Target.position.z;
}