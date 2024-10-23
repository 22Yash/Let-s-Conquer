const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const historyRoutes = require('./routes/history');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


require('./db/conn')
app.use('/auth', require('./routes/login'));

// Routes
app.use('/api/history', historyRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
