const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Base = require("./model/card");
const card = require("./model/card");

const app = express();
const router = express.Router();

mongoose.connect("mongodb://localhost:3010/");
var db = mongoose.connection;
//db.on('error', console.error('Erreur de connexion'));

async function findDB () {
    const firstElem = await Base.findOne();
    res = firstElem.themeArray;
    //console.log(res);
    return res;
}

function themeIndex (name, data) {
  res = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      res = i;
    }
  }
  return res;
}

async function addTheme (name) {
  var data = await findDB();
  if (themeIndex(name, data) === -1) {
    data.push({"name": name, "cardArray": []});
  }
  await Base.updateOne({}, {$set: {themeArray: data}});
  //console.log(await findDB())
}

async function rmTheme (name) {
  var data = await findDB();
  index = themeIndex(name, data);
  if (index != -1) {
    data.splice(index,1);
  }
  await Base.updateOne({}, {$set: {themeArray: data}});
  //console.log(await findDB())
}

async function addCard (theme, question, response) {
  const data = await findDB();
  index = themeIndex(theme, data);
  if (index != -1) {
    data[index].cardArray.push({question: question, response: response})
  }
  await Base.updateOne({}, {$set: {themeArray: data}});
  //console.log(await findDB())
}

async function rmCard (theme, cardID) {
  const data = await findDB();
  index = themeIndex(theme, data);
  if (index != -1) {
    //data[index].cardArray.push({question: question, response: response})
    if (cardID >= 0 && cardID < data[index].cardArray.length) {
      data[index].cardArray.splice(cardID, 1);
    }
  }
  await Base.updateOne({}, {$set: {themeArray: data}});
  //console.log(await findDB())
}

const API_PORT = process.env.API_PORT || 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});
router.get('/getDB', async (req, res) => {
 //il n'y aura jamais de problèmes 
  return res.json({ success: true, data: await findDB() });

});

router.post('/addFlashcard', (req, res) => {
  //console.log(req.body);
  addCard(req.body.theme, req.body.question, req.body.response);
});
router.post('/rmFlashcard', (req, res) => {
  console.log(req.body);
  rmCard(req.body.theme, req.body.cardID);
});
router.post('/addTheme', (req, res) => {
  //console.log(req.body);
  const theme = req.body.theme;
  addTheme(theme);
});
router.post('/rmTheme', (req, res) => {
  //console.log(req.body);
  const theme = req.body.theme;
  rmTheme(theme);
});

