const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const fs = require("fs");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const customCss = fs.readFileSync(process.cwd() + "/swagger.css", "utf8");

const managedElementController = require("./controller/managedElement.controller");

const app = express();
const port = process.env.PORT || 3000;
// const { Server } = require('jsonrpclib')
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var axios = require('axios')

var path = require('path');

app.use(bodyParser.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCss })
);

app.get("/api/managedElements", (req, res) => {
  managedElementController.getManagedElements().then((data) => res.json(data));
});

app.post("/api/managedElement", (req, res) => {
  console.log(req.body);
  managedElementController
    .createManagedElement(req.body.managedElement)
    .then((data) => res.json(data));
});

app.put("/api/managedElement", (req, res) => {
  managedElementController
    .updateManagedElement(req.body.managedElement)
    .then((data) => res.json(data));
});

app.delete("/api/managedElement/:id", (req, res) => {
  managedElementController
    .deleteManagedElement(req.params.id)
    .then((data) => res.json(data));
});

app.get("/api/lldp/:swid", (req, res) => {
  console.log("lldp: ")
  console.log(req.params.swid);
  axios.post('http://192.168.56.10'+req.params.swid+'/command-api', {
      jsonrpc: '2.0',
      method: 'runCmds',
      params: {
        format: 'json',
        timestamps: false,
        cmds: [
          'show lldp neighbors',
        ],
        version: 1,
      },
      id: 'EapiExplorer-1',
    }, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic c2RzOlNkczEyMyEh',
      },
    })
    .then((response) => 
    {
      console.log('response.data :');
      console.log(response.data);
      res.json(response.data)
      
    });
   
  // var xhr = new XMLHttpRequest();
  // var data = {
  //   "jsonrpc": "2.0",
  //   "method": "runCmds",
  //   "params": {
  //     "format": "json",
  //     "timestamps": false,
  //     "cmds": [
  //       "show lldp neighbors"
  //     ],
  //     "version": 1
  //   },
  //   "id": "EapiExplorer-1"
  // };
  // xhr.onload = function() {
  //   if (xhr.status === 200 || xhr.status === 201) {
  //     console.log(xhr.responseText);
  //   } else {
  //     console.error(xhr.responseText);
  //   }
  // };
  // xhr.open('POST', 'https://192.168.56.102/command-api');
  // xhr.setRequestHeader("Authorization", "Basic c2RzOlNkczEyMyEh")
  // xhr.setRequestHeader("Accept", "application/json")
  // xhr.setRequestHeader("Content-Type", "application/json") // 컨텐츠타입을 json으로
  // xhr.send(JSON.stringify(data)); // 데이터를 stringify해서 보냄

});

app.get("/", (req, res) => {
  res.send(`<h1>API Works !!!</h1>`);
  // res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
