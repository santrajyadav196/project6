const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const Detail = require('./models/detail');


mongoose.connect('mongodb://localhost:27017/detail', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/details', async (req, res) => {
    const details = await Detail.find({});
    res.render('details/index', { details });
})

app.get('/details/new', (req, res) => {
    res.render('details/new')
})

app.post('/details', async (req, res) => {
    const newDetail = new Detail(req.body);
    await newDetail.save();
    res.redirect(`/details/${newDetail._id}`)
});

app.get('/details/:id', async (req, res) => {
    const { id } = req.params;
    const detail = await Detail.findById(id)
    res.render('details/show', { detail })
});

app.get('/details/:id/edit', async (req, res) => {
    const { id } = req.params;
    const detail = await Detail.findById(id);
    res.render('details/edit', { detail })
})

app.put('/details/:id', async (req, res) => {
    const { id } = req.params;
    const detail = await Detail.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/details/${detail._id}`);
})

app.delete('/details/:id', async (req, res) => {
    const { id } = req.params;
    const deletedDetail = await Detail.findByIdAndDelete(id);
    res.redirect('/details');
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
});
