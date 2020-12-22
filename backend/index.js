const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: [process.env.CLIENT_URL]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

if (require.main === module) {
  const port = process.env.API_PORT || 5000;

  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}
