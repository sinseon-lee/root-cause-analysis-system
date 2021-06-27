<template>

        <div id="topology-container"></div>
      
	<!-- Application scripts -->
	

</template>


<script>
export default {
  
 
  created() {
    this.setTopoData();
   
  }, 
  mounted() {
      let stripeScript = document.createElement('script');
            stripeScript.setAttribute('src', '../../../public/next-bower/js/next.min.js');
	
            stripeScript.onload = () => {
             
              console.log("loaded?");
            };

            document.body.appendChild(stripeScript);
           
			let mainScript=document.createElement('script');
			mainScript.setAttribute('src', '../../../public/app/main.js');
			document.body.appendChild(mainScript);

			let topoScript=document.createElement('script');
			topoScript.setAttribute('src', '../../../public/app/topology.js');
			document.body.appendChild(topoScript);

  },
  methods: {
    setTopoData(){
     let topologyData = {
	"nodes": [
		{
			"id": 0,
			"name": "vEOS1",
			"device": "switch"
		},
		{
			"id": 1,
			"name": "vEOS2",
			"device": "switch"
		},
		{
			"id": 2,
			"name": "vEOS3",
			"device": "switch"
		},
		{
			"id": 3,
			"name": "vEOS4",
			"device": "switch"
		}
	],
	"links": [
		{
			"id": 0,
			"source": 0,
			"target": 1
		},
		{
			"id": 1,
			"source": 0,
			"target": 2
		},
		{
			"id": 2,
			"source": 0,
			"target": 3
		},
		{
			"id": 3,
			"source": 1,
			"target": 2
		},
		{
			"id": 4,
			"source": 1,
			"target": 3
		},
		{
			"id": 5,
			"source": 2,
			"target": 3
		}
	]
};
      localStorage.setItem("topoData",JSON.stringify(topologyData) )
    }

  }

}
</script>