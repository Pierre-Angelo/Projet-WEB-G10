const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardsSchema = new Schema ({
    question: String,
    response: String
}, {_id: false});

const Theme = new Schema ({
    name: String,
    //subdoc: CardsSchema,
    cardArray: [CardsSchema]
}, {_id: false});

const Base = new Schema ({
    themeArray: [Theme]
})

module.exports = mongoose.model('Base', Base);
