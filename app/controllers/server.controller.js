const db = require("../models");
const config = require("../config/auth.config");
const { server: Server} = db;
const util = require('minecraft-server-util');
const { stringify } = require("uuid");

const client = new util.RCON();
const options = {
    sessionID: 1, // a random 32-bit signed number, optional
    enableSRV: true // SRV record lookup
};
const connectOpts = {
    timeout: 1000 * 5
};
const loginOpts = {
    timeout: 1000 * 5
};
setInterval(async () => {
    Server.findAll( {
        attributes: ['id', 'port', "ip"]

    }).then(async (server) => {
        server.forEach(server => {
            util.queryBasic(server.ip, server.port, options)
            .then((result) => {
                let pizda = result.players
                Server.update(
                {
                    online: pizda.online,
                    max: pizda.max
                },
                {
                    where: 
                    {
                        id: server.id
                    }
                });
            })
            .catch((error) => console.error(error));
        });
    });   

  }, (300000));
exports.getservers = (req, res) => {
    Server.findAll( {
        attributes: ['id', 'name', "max","online"]

    }).then(async (server) => {
        res.send(server).status(200);

    });    
  };
exports.rconsend = async(req, res) => {

    var object
    let command = req.body.command
    Server.findOne({
        where: {
          name: req.body.ServerName
        }
      }).then(async (server) => {
            try {
            await client.connect(server.ip, server.port, connectOpts);
            await client.login(server.rcon_pass, loginOpts);
            
            const message = await client.execute(req.body.command);
            res.send(message).status(200)
            await client.close();
            } catch(e){ 
                await client.close();
                res.send('unknown command').status(200)
            }
        })
        
};
exports.quests = async(req, res) => {

    var quests = {
        1:{
            name : " pizda"
        }
    }

    let user = {
        username: req.body.username,
        questsid: req.body.questid,
        questsid: req.body.completed  
    }
    console.log(quests[1].name)
};