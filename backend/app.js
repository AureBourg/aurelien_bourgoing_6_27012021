const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Changer l'adresse de mangoose.connect par celle de mon cluster sur MongoDB et mettre le MDP à la place de <PASSWORD>
mongoose.connect('mongodb+srv://aurebourg:W4gkLm8OxgXXTEEi@cluster0.r1rom.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

//Requête test
app.use((req, res) => {
  res.json({ message: 'Votre requête est reçue !' }); 
});

module.exports = app;