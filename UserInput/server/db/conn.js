const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/IPPractical'
)
.then(() => console.log('Database connected'))
.catch((err) => console.error('Database connection error:', err));
