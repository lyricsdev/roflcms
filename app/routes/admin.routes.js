const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

const ServerController = require("../controllers/server.controller");
const newscontroller = require("../controllers/news.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/rconsend",[authJwt.verifyToken, authJwt.isAdmin],ServerController.rconsend)
  app.post("/api/addnews",[authJwt.verifyToken, authJwt.isAdmin],newscontroller.addnews)

};
