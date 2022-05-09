const db = require("../models");

const { user: User } = db;


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
exports.getuserbyid = (req,res) =>
{
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(async (user) => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    }
    );
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

exports.createuser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password:  bcrypt.hashSync(req.body.newpassword, 8),
            email: req.body.email,
            balance: req.body.balance
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
exports.deleteuser = async (req, res) => {
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
        await user.destroy();
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
