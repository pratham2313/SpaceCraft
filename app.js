const express = require('express');
const bodyParser = require('body-parser');
const spacecraftRoutes = require('./controller/routes');

const app = express();
app.use(bodyParser.json());
// app.post('/spacecraft/commands', (req, res) => {
//     var command = req.body.command;
//     console.log(command);
//     const result = spacecraftController.processCommands(command);
//     console.log(result);
//     res.json(result);
// })

app.use('/spacecraft', spacecraftRoutes);

module.exports = app;