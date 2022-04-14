var fs = require('fs')

var respond = {
  'success' : false,
  'message' : 'Ошибка загрузки! Пожалуйста, выберите тип файла!'
}
var mime = require('mime-types')

function deletefileskin(name)
{
  fs.unlink(name, function (err) {            
       if (err) {                                                 
           console.error(err);                                    
       }                                                          
   });      
}
function setdefaultskin(name)
{
  try{
    storage = './dist/skins/'
    let namef = storage + "default.png"

    let namea = storage + name + ".png"
    if(fs.existsSync(namea))
    return;
    fs.copyFile(namef, namea, (err) => {
      if (err) throw err;
    })     
  }catch(e){

  }
}
exports.skindelete = (req, res) => {

  let type = req.body.data.type
  let username = req.body.data.username

  let storage;

  console.log(req.body);
  if (type == 'cloak'){
    storage = "./dist/cloaks"

  }else if (type == 'skin'){
    storage = "./dist/skins/"
  }
  let link = './dist/skins/'  + username + '.png'
  try{
    deletefileskin(link)
    setdefaultskin(username)
  }
  catch(e)
  {
    console.log(e)
  }

};

exports.skincheckexist = async (req, res) => {

  let name = req.body.username;
    console.log(req.body)

  let storage = './dist/skins/'
  let namef = storage + name + ".png"
  let data = {
      username: name,
      status : true
  }
    if(fs.existsSync(namef)){
      
    res.status(200).send(true);
    } else{ 
      data.status = false
      res.send(data)
    }

};