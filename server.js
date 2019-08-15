const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB(); // Calling MongoDB

// Initializing Express-Validator(Middleware)
app.use(express.json({ extended: false })); // allows us to get data in req.body for console
const PORT = process.env.PORT || 5000;

// Get request
app.get('/', (req, res) => res.send('Express server online. API running'));

// Defining routes
// One for each file
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// template literal on PORT variable
