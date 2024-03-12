const Position = require('../models/position.model')

module.exports.CreatePosition = (req, res) => {
    Position.create(req.body)
    .then(newlyCreatePosition => {
        res.status(201).json({ position: newlyCreatePosition })
    })
    .catch((err) => {
        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(error => error.message);
            res.status(400).json({ message: 'Validation error', errors: errors });
        } else {
            res.status(500).json({ message: 'Something went wrong', error: err });
        }
    })
}

module.exports.getAllPosition = (req, res) => {
    Position.find({})
    .then(positions => {
        console.log(positions);
        res.json({ allpositions: positions });

    })
    .catch(err => {
        console.log(err);
        res.json({ message: 'Something went wrong', error: err });
    })
}