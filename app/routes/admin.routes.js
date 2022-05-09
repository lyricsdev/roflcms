const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

const ServerController = require("../controllers/server.controller");
const newscontroller = require("../controllers/news.controller");
const adminservice = require("../services/admin.service");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/admin/rconsend",[authJwt.verifyToken, authJwt.isAdmin],ServerController.rconsend)
  app.post("/api/admin/addnews",[authJwt.verifyToken, authJwt.isAdmin],newscontroller.addnews)
  app.post("/api/admin/givemoneytouser",[authJwt.verifyToken, authJwt.isAdmin],adminservice.givemoneytouser)
  app.post("/api/admin/addserver",[authJwt.verifyToken, authJwt.isAdmin],adminservice.addserver)
  app.post("/api/admin/getallusers",[authJwt.verifyToken, authJwt.isAdmin],adminservice.getallusers)
  app.post('/api/admin/edituser',[authJwt.verifyToken, authJwt.isAdmin],adminservice.edituser)
  app.post('/api/admin/editserver',[authJwt.verifyToken, authJwt.isAdmin],adminservice.editserver)
  app.post('/api/admin/getservers',[authJwt.verifyToken, authJwt.isAdmin],adminservice.getservers)
  app.post('/api/admin/getnews',[authJwt.verifyToken, authJwt.isAdmin],adminservice.getnews)
  app.post('/api/admin/editnews',[authJwt.verifyToken, authJwt.isAdmin],adminservice.editnews)
};
