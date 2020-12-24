const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { v4: uuid } = require('uuid');

exports.finALl = async (req, res) => {
  try {
    const { product, token } = req.body;
    const idempontencyKey = uuid();

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const shipping = {
      name: token.card.name,
      adress: {
        country: token.card.adress_country
      }
    };

    const result = await stripe.charges.create({
      anount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: `Purchase of ${product.name}`,
      shipping
    }, { idempontencyKey });

    res.status(200).json(result);
  }
  catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred'
    });
  }
};
