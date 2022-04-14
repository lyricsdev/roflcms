var fs = require('fs')

var respond = {
  'success' : false,
  'message' : 'Ошибка загрузки! Пожалуйста, выберите тип файла!'
}
var mime = require('mime-types')

function deletefilecape(name)
{
  fs.unlink(name, function (err) {            
       if (err) {                                                 
           console.error(err);                                    
       }                                                          
   });      
}
exports.cloakdelete = (req, res) => {

  let username = req.body.username


  let link = './dist/cloaks/'  + username + '.png'
  try{
    deletefilecape(link)
  }
  catch(e)
  {
    console.log(e)
  }

};

exports.cloakcheckexist = async (req, res) => {
let name = req.body.username;
    console.log(req.body)

  let storage = './dist/cloaks/'
  let namef = storage + name + ".png"
  let data = {
      username: name,
      status : true,
  }
    if(fs.existsSync(namef)){
      
    res.status(200).send(true);
    } else{ 
      data.status = false
      res.send(false)
    }

};