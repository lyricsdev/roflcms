const express = require("express");
const cors = require("cors");
var path = require('path');
var history = require('connect-history-api-fallback');
const staticFileMiddleware = express.static('dist');
var bodyParser = require('body-parser');

const app = express();
app.use(express.static('dist'));

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(staticFileMiddleware);

app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();


app.use(history({
  index: '/index.html'
}));


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/admin.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

