const mongoose = require("mongoose");
const Base = require("./model/card");

mongoose.connect("mongodb://localhost:3010/");
var db = mongoose.connection;

async function iniBase () {
    const base = await new Base({
        themeArray: [{
            name: 'test',
            cardArray: [
                {question: 'q1', response: 'r1'},
                {question: 'q2', response: 'r2'}
            ]
        },
        {
            name: 'test2',
            cardArray: [
                {question: 'q1', response: 'r1'},
                {question: 'q2', response: 'r2'}
            ]
        }]

    });
    await base.save();
}

iniBase();
console.log("done");