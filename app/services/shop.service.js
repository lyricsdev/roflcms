
const { json } = require("body-parser");
const db = require("../models");
const { shop: Shop , shop_items : Shot_Items,shop_SH : Shop_categories,shop_c : categories} = db;
const Op = db.Sequelize.Op;

async function getitemsfromcategory(category_id){
    var items = [];
   await category_id.forEach(category_id => {
        Shot_Items.findAll({
            raw: true,

            where: {
                category_id: category_id.shop_category_id
            }
        }).then(async (items) => {
            items.forEach(item => {
                return item.name;
        });
        }).catch(err => {
            console.log(err);
        });
    });
    return items;
}

async function printcategoriesidinshop(shop_id){
     Shop_categories.findAll({
        raw: true,
        where: {
            shop_id: shop_id
        }
    }).then(async (categories) => {
       return getitemsfromcategory(categories);
    })
}
exports.GetActiveShops = (req, res) => {
    Shop.findAll( {
        where: {
            active: true
        }
    }).then(async (actives) => {
        actives.forEach(element => {
            Shop_categories.findAll({
                raw: true,
                where: {
                    shop_id: element.id
                }
            }).then(async (categories) => {
                categories.forEach(category_id => {
                    Shot_Items.findAll({
                        raw: true,
            
                        where: {
                            category_id: category_id.shop_category_id
                        }
                    }).then(async (items) => {
                        let array = [];

                        items.forEach((item) => {
                        array.push(item);
                        });
                        res.send(array);
                    }).catch(err => {
                        console.log(err);
                    });
                });
            })
        });
    });  
    
}

