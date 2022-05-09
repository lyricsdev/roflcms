const db = require("../models");

const { news: News} = db;


exports.getnews = (req, res) => {
    News.findAll( {
        attributes: ['id', 'title', "content","author","createdAt"],
        order: [ [ 'createdAt', 'DESC' ]],
        limit: 10
    }).then(async (news) => {
        res.send(news).status(200);
    });    
};
exports.addnews = (req, res) => {
    var {titile, content, author} = req.body;
    News.create( {
        title: titile,
        content: content,
        author: author
    }).then(async (news) => {
        res.send(news).status(200);
    });    
};