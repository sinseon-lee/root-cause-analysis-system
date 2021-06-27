(function(nx){

	// instantiate NeXt app
	var app = new nx.ui.Application();

	// instantiate Topology class
	var topology = new MyTopology();

	// load topology data from app/data.js
	var topoData;
	topoData=JSON.parse(window.localStorage.getItem('topoData'));
	console.log("topoData:")
	console.log(topoData);
	topology.data(topoData);

	// bind the topology object to the app
	topology.attach(app);

	// app must run inside a specific container. In our case this is the one with id="topology-container"
	console.log("get by id")
	console.log(document)
	console.log(document.getElementById("topology-container"));
	app.container(document.getElementById("topology-container"));

})(nx);
