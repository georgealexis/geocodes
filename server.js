const express = require('express') //importing express package
const { Client } = require('pg') //importing Client function from pg package
const cors = require('cors') //importing cors package


app = express()  //creating a new express application


app.use(cors()) //middleware, allowing the server to accept requests from other domains
app.use(express.json()) //middleware, use the json in express package
port = 8080


const client = new Client({ //Creating a new client object that is connecting to the database, using my own connection string 
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "george",
    port: 5432,
})



client.connect(function (err) { //Function that connects to the database. Fails, will log the error and throw the error. Succeeds, it will log the message "Connected!".

    if (err) {
        console.log(err);
        throw err;
    }

    console.log("Connected!");
});



app.post('/mod2and3', (req, res) => { //route name, request and response

    console.log(req.body)
    try {
        query = `INSERT INTO raidhw (input) VALUES ('${req.body.data}')` // insert new record into table, named raidhw, column input, valuees getelementbyid req input from body, take input named "data"
        client.query(query)
    } catch (err) {
        console.log(err)
        res.status(400).send("Bad Request")
    }
    res.status(200).send("Added to database")
})


app.listen(port, () => { // Keep listening for a request to the port 8080, without listen, server will stop
    console.log(`App listen on port ${port}`)
})
