// ----------------------------------------------------------------------------------------------------
// Packages

const express = require("express");
const app = express();
const { users, events, participants } = require('./models');

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



// ----------------------------------------------------------------------------------------------------
// Server

port = 3005;
app.listen(
  process.env.PORT || port,
  console.log(`Server is running on port ${port}`)
);