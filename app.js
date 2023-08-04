const express = require('express');
const bodyParser = require('body-parser');

const SpacecraftController = require('./controller/SpacecraftController');

const app = express();

const spacecraftController = new SpacecraftController();

const PORT = 5000;

app.post('/spacecraft/commands', (req, res) => {
    var command = req.body.command;
    console.log(command);
    const result = spacecraftController.processCommands(command);
    res.json(result);
})

app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}`);
});
module.exports = app;