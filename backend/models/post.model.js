const mongoose = require("mongoose");

const postShema = mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
        },

        unit_amount: {
            type: Number,
            required: true,
        },

        currency: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
        },
        id_product: {
            type: String,
        },
        id_price: {
            type: String,
        },

        url: {
            type: String,
        }



    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('link', postShema)