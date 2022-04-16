const db = require("../models");
const config = require("../config/auth.config");
const { server: Server} = db;

exports.getservers = (req, res) => {
    Server.findAll( {
         limit: 1
    }).then(async (server) => {
        res.send(server).status(200);

    });    
  };
  