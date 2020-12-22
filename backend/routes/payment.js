const router = require('express').Router();
const payment = require('../controllers/payment');

router.post('/api/payment', payment.finALl);

module.exports = router;
