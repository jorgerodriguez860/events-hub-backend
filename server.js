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

    }
    else {
      res.send({ signedIn: false })
    }

})

app.post('/createevent', async (req, res) => {
  // console.log(req.body)
  // res.send(req.body)

      //check if username matches in the database
      const user = await users.findOne({
        where: {
            username : req.body.user_id,
        }
    })

    if(user!=null) {
      // res.send({ signedIn: true, username: user.username, host: user.host })
      events.create({
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        hour: req.body.hour,
        minute: req.body.minute,
        type: req.body.type,
        title: req.body.title,
        description: req.body.description,
        city: req.body.city,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        user_id: req.body.user_id,
      })

      res.send({created: true})

    }
    else {
      res.send({ created: false })
    }

})

app.post('/addparticipant', async (req, res) => {
  // console.log(req.body)
  // res.send(req.body)

  const participant = await participants.findOne({
    where: {
      event_id: req.body.event_id,
      user_id: req.body.user_id
    }
  })
      //check if username matches in the database
      const user = await users.findOne({
        where: {
            username : req.body.user_id,
        }
    })

    if(participant!=null) {
      res.send({status: 'exists'})
    }
    else if(user!=null) {
      // res.send({ signedIn: true, username: user.username, host: user.host })
      participants.create({
        event_id: req.body.event_id,
        user_id: req.body.user_id
      })

      res.send({status: 'added'})

    }
    else {
      res.send({ status: 'not added' })
    }

})

// get events i created
// need an id,
app.get('/eventsicreated', async (req, res) => {
  
  // console.log(req.query.user)
  const eventsList = await events.findAll({
    where: {
        user_id: req.query.user
    }
})

  console.log(eventsList)
  res.send(eventsList)
})

// delete event i created
// need an id,
app.delete('/deleteeventicreated/:id', async (req, res) => {
  console.log(req.params.id)
  // res.send(req.params.id)

  const event = await events.findOne({
    where: {
      id: req.params.id
    }
  })

    if(event!=null) {
      const event = await events.destroy({
          where: {
              id: req.params.id
          }
      })
      res.send({status: 'deleted', event: event})


    }
    else {
      res.send({ status: 'not deleted' })
    }

})



// ----------------------------------------------------------------------------------------------------
// Server

port = 3005;
app.listen(
  process.env.PORT || port,
  console.log(`Server is running on port ${port}`)
);