const db = require("../models");

const { Role,server: Server} = db;

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


exports.sendrcontoid = async (req, res) => {
    try {
        const server = await Server.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!server) {
            return res.status(404).json({
                success: false,
                error: "Server not found"
            });
        }
        client.connect(server.ip, server.port, connectOpts)
        .then(() => {
            client.login(server.rcon, loginOpts)
            .then(() => {
                client.send(req.body.command)
                .then((result) => {
                    res.status(200).json({
                        success: true,
                        data: result
                    });
                }
                )
                .catch((error) => {
                    res.status(500).json({
                        success: false,
                        error: error
                    });
                }
                );
            }
            )
            .catch((error) => {
                res.status(500).json({
                    success: false,
                    error: error
                });
            }
            );
        }
        )
        .catch((error) => {
            res.status(500).json({
                success: false,
                error: error
            });
        }
        );
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}
exports.deleteserver = async (req, res) => {
    try {
        const server = await Server.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!server) {
            return res.status(404).json({
                success: false,
                error: "Server not found"
            });
        }
        await server.destroy();
        res.status(200).json({
            success: true
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}

exports.editserver = async (req, res) => {
    try {
        const server = await Server.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!server) {
            return res.status(404).json({
                success: false,
                error: "Server not found"
            });
        }
        await server.update({
            name: req.body.name,
            ip: req.body.ip,
            port: req.body.port,
            rcon_pass: req.body.rcon_pass,
            db_hostname: req.body.db_hostname,
            db_table_name: req.body.db_table_name,
            db_table_user: req.body.db_table_user,
            db_table_password: req.body.db_table_password,
            shop_id: req.body.shop_id,
            version: req.body.version
        });
        res.status(200).json({
            success: true
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}
exports.getserverbyid = async (req, res) => {
    try {
        const server = await Server.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!server) {
            return res.status(404).json({
                success: false,
                error: "Server not found"
            });
        }
        res.status(200).json({
            success: true,
            data: server
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}
exports.getservers = async (req, res) => {
    try {
        const servers = await Server.findAll({
        });
        res.status(200).json({
            success: true,
            data: servers
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}
exports.addserver = async (req, res) => {
    try {
        const server = await Server.create({
            name: req.body.name,
            ip: req.body.ip,
            port: req.body.port,
            rcon_pass: req.body.rcon_pass,
            db_hostname: req.body.db_hostname,
            db_table_name: req.body.db_table_name,
            db_table_user: req.body.db_table_user,
            db_table_password: req.body.db_table_password,
            shop_id: req.body.shop_id,
            version: req.body.version
        });
        res.status(200).json({
            success: true,
            data: server
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}