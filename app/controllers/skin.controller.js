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
      console.log('File has been Deleted');                           
   });      
}
function setdefaultskin(name)
{
  try{
    storage = 'D:/myvue/pizda/dist/skins/'
    let namef = storage + "default.png"

    let namea = storage + name;
    if(fs.existsSync(namea))
    return;
    fs.copyFile(namef, namea, (err) => {
      if (err) throw err;
      console.log('source.txt was copied to destination.txt');
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
    storage = "./../../../dist/cloaks"

  }else if (type == 'skin'){
    storage = "./../../../dist/skins"
  }
  let link = 'D:/myvue/pizda/dist/skins/'  + username + '.png'
  console.log(link)
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

  let storage = 'D:/myvue/pizda/dist/skins/'
  let namef = storage + name + ".png"
  console.log(namef)
  console.log(fs.existsSync(namef))
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