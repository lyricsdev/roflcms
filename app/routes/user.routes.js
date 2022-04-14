const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const skincontroller = require("../controllers/skin.controller");
var fs = require('fs')
const multer = require('multer')
const fileFilter = (req, file, cb) => {
  
  if(file.mimetype === "image/png" || 
  file.mimetype === "image/jpg"|| 
  file.mimetype === "image/jpeg"){
      cb(null, true);
  }
  else{
      cb(null, false);
  }
}
const upload = multer({dest: './dist/uploads/',  fileFilter,
limits: {
  fileSize: 500000
}})

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  app.post("/api/skins/upload", [authJwt.verifyToken],upload.single('file'), (req, res, next) => {


  let fileObj = req.file
    
  let body = req.body
  let originalArr = fileObj.originalname.split('.')
  let type = originalArr[originalArr.length - 1]
  fs.readFile('./dist/uploads/' + fileObj.filename, (err, data) => {
    if (err) console.log(err)

     let newPath = './dist/skins/' + body.body + "." + type
     console.log(newPath)
     fs.writeFile(newPath, data, (err) => { 
      if (err) throw err
    })
    fs.unlink('./dist/uploads/' + fileObj.filename, () => {
      res.send(200)
    })
  })
});
  app.post(
    "/api/skins/delete",
    [authJwt.verifyToken],
    skincontroller.skindelete
  );
  app.post(
    "/api/skins/checkexist",
    skincontroller.skincheckexist
  );
};
