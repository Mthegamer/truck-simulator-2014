using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class TerrainScript : MonoBehaviour
{
	public Transform car;
	public GameObject[] ChunkTypes;
	public List<GameObject> ChunkList;
	int[] Level1 = {2,2,2,1,3,1,3,1,3,1,3};
	// Use this for initialization
	void Start ()
	{
		float z = 0;
		ChunkList = new List<GameObject>();
		for(int i = 0; i < Level1.Length; i++)
		{
			int ChunkType = Level1[i];
			GameObject chunk = (GameObject)Instantiate(ChunkTypes[ChunkType - 1], new Vector3(0,0,z), Quaternion.FromToRotation(Vector3.forward, Vector3.up));
			ChunkList.Add(chunk);
			z += chunk.transform.collider.bounds.size.z;
		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
