const express = require('express');
const SpacecraftController = require('./SpacecraftController');

const router = express.Router();
const spacecraftController = new SpacecraftController();

router.post('/commands', (req, res) => {
    var command = req.body.command;
    var position = req.body.position;
    var direction = req.body.direction;
    console.log(command);
    const result = spacecraftController.processCommands(command, position, direction);
    console.log(result);
    res.json(result);
});

module.exports = router;