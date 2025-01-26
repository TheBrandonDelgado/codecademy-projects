const express = require('express');
const cors = require('cors');
require('dotenv').config();
const expenseRoutes = require('./routes/expense');

// Running express server
const app = express();
const port = process.env.PORT || 8000;

// CORS configuration
app.use(cors({
  origin: ['*'],
}));

// route middlewares
app.use('/api', expenseRoutes);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
