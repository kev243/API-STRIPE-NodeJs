const express= require('express');
const { createProducts,createLinks,createPrices, getAllProducts,updatePrices,getLinkPayment,updatePaymentLink,deleteProduct } = require('../controllers/post.controlle');
const router =express.Router()



//nos routes get 
router.get("/v1/products", getAllProducts)
router.get("/v1/payment_links/:id",getLinkPayment)

//nos routes post
router.post("/v1/products/:id", updatePrices)
router.post("/v1/products",createProducts)
router.post("/v1/prices", createPrices)
router.post("/v1/payment_links",createLinks)
router.post("/v1/payment_links/:id",updatePaymentLink)

//nos routes delete
router.delete("v1/products/:id",deleteProduct)






module.exports=router