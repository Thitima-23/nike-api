
const menu = require('../models/menuModels');
const Menu = require('../models/menuModels');
const Shop = require('../models/shopModels');



exports.index =  async(req, res, next) => {
    const shop = await Shop.find();
    console.log(shop)

    const shopwitDomain = await shop.map((s,index) => {
        return{
          id:s._id,
          name:s.name,
          photo:'http://127.0.0.1/images/'+s.photo,
        }
    })

    res.status(200).json({
      data:shop,
    })
  };

 exports.getmenuAll = async (req, res, next) => {
  const menu = await Menu.find();

  res.status(200).json({
    data:menu,
  })
  }

  exports.shopwithMenu = async(rep,res,next) => {
    const {id} = rep.params;
    const shop = await Shop.findById(id).populate('menuItem')

    res.status(200).json({
      data:shop
    })
  }