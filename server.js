// ----------------------------------------------------------------------------------------------------
// Packages

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const { users, events, participants } = require('./models');
const bcrypt = require('bcrypt');
const saltRounds = 8;

// ----------------------------------------------------------------------------------------------------
// Body of endpoints here

// get events to show on map
// need a city, date
app.get('/mapevents', async (req, res) => {
  const eventsList = await events.findAll({
    where: {
        city : req.query.city,
        year: req.query.year,
        month: req.query.month,
        day: req.query.day
    }
    
})
  res.send(eventsList)
})

app.post('/login', async (req, res) => {
  // console.log(req.body)
  // res.send(req.body)

      //check if username matches in the database
      const user = await users.findOne({
        where: {
            username : req.body.username,
            password : req.body.password
        }
    })

    if(user!=null) {

        res.send({ signedIn: true, username: user.username, host: user.host })
    //     // bcrypt.compare(req.body.password, user.password, function(err, result) {

    //         // if(result == true) {
    //         //     username = user.username
    //         //     res.redirect("/jobs")
    //         // }
    //         // else {
    //             // res.redirect('/login')
    //         // }
    //     // });
    // // }
    // // else {
    }
    else {
      res.send({ signedIn: false })
    }

})


// ----------------------------------------------------------------------------------------------------
// Server

port = 3005;
app.listen(
  process.env.PORT || port,
  console.log(`Server is running on port ${port}`)
);