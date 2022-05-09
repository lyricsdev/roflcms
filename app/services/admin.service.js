const db = require("../models");

const { user: User, role: Role,server: Server,news: News } = db;


exports.getallusers = async (req, res) => {
    try {
        const users = await User.findAll({
        });
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}

exports.edituser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found"
            });
        }
        await user.update({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });
        res.status(200).json({
            success: true,
            data: user
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
exports.addnews = async (req, res) => {
    try {
        const news = await News.create({
            title: req.body.title,
            content: req.body.content
    });
        res.status(200).json({
            success: true,
            data: news
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}
exports.givemoneytouser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found"
            });
        }
        await user.update({
            balance: req.body.money
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
exports.getnews = async (req, res) => {
    try {
        const news = await News.findAll({
        });
        res.status(200).json({
            success: true,
            data: news
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}
exports.editnews = async (req, res) => {
    try {
        const news = await News.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!news) {
            return res.status(404).json({
                success: false,
                error: "News not found"
            });
        }
        await news.update({
            title: req.body.title,
            content: req.body.content
        });
        res.status(200).json({
            success: true,
            data: news
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}