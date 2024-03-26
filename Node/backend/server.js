const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Base = require("./model/card");

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

router.post('/newFlashcard', (req, res) => {
  console.log(req.body);
  // faire le save
});

