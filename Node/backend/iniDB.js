const mongoose = require("mongoose");
const Base = require("./model/card");

mongoose.connect("mongodb://localhost:3010/");
var db = mongoose.connection;

async function iniBase () {
    const base = await new Base({
        themeArray: [{
            name: 'PPC',
            cardArray: [
                {
                    question: 'Which part of the operating system decides which process will run next?',
                    response: 'The scheduler'
                },
                {
                    question: 'On a dual-core system, how many processes can run on a single processing core at the same time?',
                    response: '1'
                }
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