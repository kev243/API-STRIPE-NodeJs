const PostModel = require('../models/post.model');


module.exports.setLinks = async (req, res) => {

    const link = await PostModel.create({
        name: req.body.name,
        unit_amount: req.body.unit_amount,
        currency: req.body.currency,
        nickname: req.body.nickname,
        id_product: req.body.id_product,
        id_price: req.body.id_price,
        url: req.body.id_price,

    })
    res.status(200).json(link)

};


module.exports.getAllProducts = async (req, res) => {
  const stripe = require('stripe')(process.env.KEY_STRIPE);

  const products = await stripe.products.list({
    limit: 8,
  });

  res.status(200).json(products)

}

module.exports.updatePrices = async (req, res) => {
  const stripe = require('stripe')(process.env.KEY_STRIPE);

  const product = await stripe.products.update(
    req.params.id,
    { default_price: req.body.default_price }
  );
  res.status(200).json(product)


}




module.exports.createProducts = async (req, res) => {
    const stripe = require('stripe')(process.env.KEY_STRIPE);

    const product = await stripe.products.create({
      name: req.body.name,
    
    });

    res.status(200).json(product)


    
}

module.exports.createPrices = async (req, res) => {
    const stripe = require('stripe')(process.env.KEY_STRIPE);

    const price = await stripe.prices.create({
      unit_amount: req.body.unit_amount,
      currency: 'usd',
      product: req.body.product,
    });

    res.status(200).json(price)

   
    

   
}

module.exports.createLinks=async(req,res)=>{
    const stripe = require('stripe')(process.env.KEY_STRIPE);

const paymentLink = await stripe.paymentLinks.create({
  line_items: [
    {
      price: req.body.price,
      quantity: 1,
    },
  ],
});

res.status(200).json(paymentLink)

}

module.exports.getLinkPayment=async(req,res)=>{
  const stripe = require('stripe')(process.env.KEY_STRIPE);

const paymentLink = await stripe.paymentLinks.retrieve(
  req.params.id

);

res.status(200).json(paymentLink);
}

module.exports.updatePaymentLink = async (req, res) => {
  const stripe = require('stripe')(process.env.KEY_STRIPE);

  const paymentLink = await stripe.paymentLinks.update(
    req.params.id,
    { active: req.body.active }
  );
  res.status(200).json(paymentLink);
}

module.exports.deleteProduct= async (req, res) => {
  const stripe = require('stripe')(process.env.KEY_STRIPE);

const deleted = await stripe.products.del(
  req.body.id
);
  res.status(200).json(deleted);
}




