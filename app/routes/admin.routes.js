const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

const ServerController = require("../controllers/server.controller");
const newscontroller = require("../controllers/news.controller");
const AuserService = require("../services/user.admin.service");
const AserverService = require("../services/server.admin.service");
const AnewsService = require("../services/news.admin.service");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/admin/users/givemoneytouser/:id",[authJwt.verifyToken, authJwt.isAdmin],AuserService.givemoneytouser);
  app.post("/api/admin/users/getallusers",[authJwt.verifyToken, authJwt.isAdmin],AuserService.getallusers);
  app.post('/api/admin/users/edituser/:id',[authJwt.verifyToken, authJwt.isAdmin],AuserService.edituser);
  app.post('/api/admin/users/createuser',[authJwt.verifyToken, authJwt.isAdmin],AuserService.createuser);
  app.post('/api/admin/users/deleteuser/:id',[authJwt.verifyToken, authJwt.isAdmin],AuserService.deleteuser);
  app.post('/api/admin/users/getuserby/:id',[authJwt.verifyToken, authJwt.isAdmin],AuserService.getuserbyid);

  app.post("/api/admin/servers/addserver",[authJwt.verifyToken, authJwt.isAdmin],AserverService.addserver);
  app.post("/api/admin/servers/getservers",[authJwt.verifyToken, authJwt.isAdmin],AserverService.getservers);
  app.post("/api/admin/servers/editserver/:id",[authJwt.verifyToken, authJwt.isAdmin],AserverService.editserver);
  app.post("/api/admin/servers/deleteserver/:id",[authJwt.verifyToken, authJwt.isAdmin],AserverService.deleteserver);
  app.post("/api/admin/servers/getserver/:id",[authJwt.verifyToken, authJwt.isAdmin],AserverService.getserverbyid);
  app.post("/api/admin/servers/sendrcontoid/:id",[authJwt.verifyToken, authJwt.isAdmin],AserverService.sendrcontoid);

  app.post("/api/admin/news/addnews",[authJwt.verifyToken, authJwt.isAdmin],AnewsService.addnews);
  app.post("/api/admin/news/getnews",[authJwt.verifyToken, authJwt.isAdmin],AnewsService.getnews);
  app.post("/api/admin/news/editnews/:id",[authJwt.verifyToken, authJwt.isAdmin],AnewsService.editnews);
  app.post("/api/admin/news/deletenews/:id",[authJwt.verifyToken, authJwt.isAdmin],AnewsService.deletenews);
  app.post("/api/admin/news/getnewsbyid/:id",[authJwt.verifyToken, authJwt.isAdmin],AnewsService.getnews);
};
