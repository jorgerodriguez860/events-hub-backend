// ----------------------------------------------------------------------------------------------------
// Packages

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const { users, events, participants } = require('./models');
const { Op } = require("sequelize")
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

    // console.log('user: ', user)

    if(user!=null) {
      res.send({ signedIn: true, username: user.username, host: user.host, id: user.id, city: user.location })

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

app.post('/createusers', async (req, res) => {

    // console.log(req.body)
    if(req.body.username === '' || req.body.password === '' || req.body.fname === '' || req.body.lname === '' || req.body.location === '') {
      res.send({created: false})
    }

    else {
      //check if username matches in the database
      const user = await users.findOne({
          where: {
              username : req.body.username,
          }
      })

      if(user === null) {
        users.create({
          host: req.body.host,
          username: req.body.username,
          password: req.body.password,
          fname: req.body.fname,
          lname: req.body.lname,
          location: req.body.location,
        })

        res.send({created: true})
      }
      else {
        res.send({ created: false })
      }
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

  // console.log(eventsList)
  res.send(eventsList)
})

// delete event i created
// need an id,
app.delete('/deleteeventicreated/:id', async (req, res) => {
  // console.log(req.params.id)
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

      const participant = await participants.destroy({
        where: {
            event_id: req.params.id
        }
    })
      res.send({status: 'deleted', event: event})
    }
    else {
      res.send({ status: 'not deleted' })
    }

})

// get my events that i signed up for
// need an id,
app.get('/myevents', async (req, res) => {
  
  // console.log(req.query.user)
  const participantsList = await participants.findAll({
    where: {
        user_id: req.query.user_id
    }
  })
  let eventArray = participantsList.map((participantsObj) => {
    return participantsObj.event_id
  })

  const myEvents = await events.findAll({
    where: {
      id : eventArray
    }
  })

  // console.log('1',eventArray)
  // console.log('2',myEvents)
  res.send(myEvents)
})

// delete event im participating in
// need an id,user_id
app.delete('/deletejoinedevent/:event_id/:user', async (req, res) => {
  // console.log(req.params.id)
  // res.send(req.params.id)

  const found = await participants.findOne({
    where: {
      event_id: req.params.event_id,
      user_id: req.params.user
    }
  })

    if(found!=null) {
      const participant = await participants.destroy({
        where: {
          event_id: req.params.event_id,
          user_id: req.params.user
        }
    })
      res.send({status: 'participant'})
    }
    else {
      res.send({ status: 'not deleted' })
    }

})

// get participants of an event
// need an id,
app.get('/eventparticipants', async (req, res) => {
  
  // console.log(req.query)
  const participantsList = await participants.findAll({
    where: {
        event_id: req.query.event_id
    }
  })


  // console.log(participantsList)
  res.send(participantsList)
})



// ----------------------------------------------------------------------------------------------------
// Server

port = 3005;
app.listen(
  process.env.PORT || port,
  console.log(`Server is running on port ${port}`)
);