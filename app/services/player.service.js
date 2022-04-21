const fs = require('fs')

exports.deletefileskin = (name) =>
{
  fs.unlink(name, function (err) {            
       if (err) {                                                 
           console.error(err);                                    
       }                                                          
   });      
}
exports.setdefaultskin = (name) =>
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

exports.deletefilecape = (name) =>
{
  fs.unlink(name, function (err) {            
       if (err) {                                                 
           console.error(err);                                    
       }                                                          
   });      
}