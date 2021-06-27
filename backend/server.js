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

app.get("/", (req, res) => {
  // res.send(`<h1>API Works !!!</h1>`);
  res.sendfile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
