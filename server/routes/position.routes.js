const PositionController = require('../controllers/position.controller');
const { authenticate } = require('../middleware/authenticate.middleware');

module.exports = (app) => {
    app.post('/api/position', PositionController.CreatePosition);
    app.get('/api/position', PositionController.getAllPosition);
}