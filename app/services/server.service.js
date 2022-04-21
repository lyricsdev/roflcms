
const util = require('minecraft-server-util');

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
exports.sendrcon = async(server,req,res) => {
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
};