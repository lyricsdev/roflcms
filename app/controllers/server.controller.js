const db = require("../models");
const config = require("../config/auth.config");
const { server: Server} = db;
const util = require('minecraft-server-util');
const { stringify } = require("uuid");

const client = new util.RCON();

const connectOpts = {
    timeout: 1000 * 5
};
const loginOpts = {
    timeout: 1000 * 5
};
exports.getservers = (req, res) => {
    Server.findAll( {
         limit: 1
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
            await client.connect(server.ip, 25575, connectOpts);
            await client.login(server.rcon_pass, loginOpts);
            
            const message = await client.execute(req.body.command);
            res.send(message).status(200)
            await client.close();
            } catch(e){ 
                await client.close();
                res.send('unkown command').status(200)
            }
        })
        
};
  