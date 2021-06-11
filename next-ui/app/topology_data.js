var topologyData = {
	"nodes": [
		{
			"id": 0,
			"name": "host1",
			"device": "host"
		},
		{
			"id": 1,
			"name": "host2",
			"device": "host"
		},
		{
			"id": 2,
			"name": "switch1",
			"device": "switch"
		},
		{
			"id": 3,
			"name": "switch2",
			"device": "switch"
		}
	],
	"links": [
		{
			"id": 0,
			"source": 0,
			"target": 2
		},
		{
			"id": 1,
			"source": 2,
			"target": 3
		},
		{
			"id": 2,
			"source": 1,
			"target": 3
		}
	]
};