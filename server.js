const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const mongoURI = 'mongodb://mongodb:27017/pj-demo';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const nameSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });

const Name = mongoose.model('Name', nameSchema);

app.post('/add-name', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    try {
        const newName = new Name({ name });
        await newName.save();

        res.status(201).json({ message: 'Name added successfully', name: newName });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving name', error });
    }
});

app.get('/echo', (req, res) => {
    const queryString = req.query;
    
    res.status(200).json({
        message: 'Here is your query string:',
        query: queryString
    });
});

// Start the server
app.listen(port, () => {
    console.log(`API server is running on http://localhost:${port}`);
});