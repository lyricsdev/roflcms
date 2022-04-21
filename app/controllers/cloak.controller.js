const fs = require('fs')
const player = require("./../services/player.service");



exports.cloakdelete = (req, res) => {

  let username = req.body.username


  let link = './dist/cloaks/'  + username + '.png'
  try{
    player.deletefilecape(link)
  }
  catch(e)
  {
    console.log(e)
  }

};

exports.cloakcheckexist = async (req, res) => {
let name = req.body.username;

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