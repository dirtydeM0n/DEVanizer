const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Express server online. API running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// template literal on PORT variable
