
const db = require("../models");
const { shop: Shop , shop_items : Shot_Items,shop_SH : Shop_categories,shop_c : categories} = db;
const Op = db.Sequelize.Op;

function getitemsfromcategory(category_id){
    category_id.forEach(category_id => {
        Shot_Items.findAll({
            raw: true,

            where: {
                category_id: category_id.shop_category_id
            }
        }).then(async (items) => {
            items.forEach(item => {
                console.log(item.name)
            });
        }).catch(err => {
            console.log(err);
        });
    });
}

function printcategoriesidinshop(shop_id){
     Shop_categories.findAll({
        raw: true,
        where: {
            shop_id: shop_id
        }
    }).then(async (categories) => {
        getitemsfromcategory(categories);
    })
}
exports.GetActiveShops = (req, res) => {
    Shop.findAll( {
        where: {
            active: true
        }
    }).then(async (actives) => {
        res.send(actives).status(200);
        printcategoriesidinshop(1);
    });  
    
}

