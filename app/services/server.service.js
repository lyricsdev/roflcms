const db = require("../models");

const util = require('minecraft-server-util');
const { server: Server} = db;

const client = new util.RCON();
const options = {
    sessionID: 1, 
    enableSRV: true 
};
const connectOpts = {
    timeout: 1000 * 5
};
const loginOpts = {
    timeout: 1000 * 5
};
exports.pingserver = async(server) => {
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
};
