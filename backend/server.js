let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  database = require("./config/database");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );

const meAPI = require("./router/me.route");

app.use(cors());

// API
app.use("/api", meAPI);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
