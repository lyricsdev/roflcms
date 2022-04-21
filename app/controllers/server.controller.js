const db = require("../models");
const config = require("../config/auth.config");
const { server: Server} = db;
const servServ = require("./../services/server.service");


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
        servServ.pingserver(server)
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

    let object
    let command = req.body.command
    Server.findOne({
        where: {
          name: req.body.ServerName
        }
      }).then(async (server) => {
        servServ.sendrcon(server,req,res)
        })
};
