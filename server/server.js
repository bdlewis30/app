require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , controller = require('./controller')

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(`${__dirname}/../public/build`)); // use this so you don't have to use npm start.

app.get('/api/shelf/:id', controller.shelf)
app.get('/api/bin/:id', controller.getBin)
app.put('/api/bin/:id', controller.updateBin)
app.delete('/api/bin/:id', controller.deleteBin)
app.post('/api/bin/:id', controller.addBin)

//Set the connect with the database
// You don't need the app.get portion if you add "DROP TABLE IF EXISTS inventory" into the seed_file.
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    app.get('db').init.seed_file().then(response => {
        console.log(response)
    })
    app.listen(process.env.PORT, () => {
        console.log(`listening on port: ${process.env.PORT}`)
    })
})


// if requiring anything from .env, you must include process.env.NAME (usually capitalize items on .env to signify to other developers not to change).