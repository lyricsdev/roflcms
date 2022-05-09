const db = require("../models");

const {news: News } = db;

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
exports.getnewsbyid = async (req, res) => {
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

exports.deletenews = async (req, res) => {
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
        await news.destroy();
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