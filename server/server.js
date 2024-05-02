const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/earth_sky_dojo_site', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to MongoDB');
}).catch(err => {
    console.error('error connecting to MongoDB: ', err);
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})