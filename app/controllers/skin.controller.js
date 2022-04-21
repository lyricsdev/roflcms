const fs = require('fs')
const player = require("./../services/player.service");

exports.skindelete = (req, res) => {

  let username = req.body.username

  console.log(req.body);
 
  let link = './dist/skins/'  + username + '.png'
  try{
    player.deletefileskin(link)
    player.setdefaultskin(username)
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
      status : true,
  }
    if(fs.existsSync(namef)){
      
    res.status(200).send(true);
    } else{ 
      data.status = false
      res.send(data)
    }

};