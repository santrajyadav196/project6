const mongoose = require('mongoose');
const Detail = require('./models/detail');

mongoose.connect('mongodb://localhost:27017/detail', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



// const d = new Detail({
//     name: 'santraj',
//     email: 'santrajyadav196@gmail.com',
//     number: '08303788783'
// })
// d.save()
//     .then(d => {
//         console.log(d)
//     })
//     .catch(e => {
//         console.log(e)
//     })


const seedDetails = [
    {
        name: 'santraaj',
        email: 'santraajyadav196@gmail.com',
        number: '08303788783'
    },
    {
        name: 'sant',
        email: 'santyadav196@gmail.com',
        number: '08303788783'
    },
    {
        name: 'santraaz',
        email: 'santraazyadav196@gmail.com',
        number: '08303788783'
    },
    {
        name: 'santu',
        email: 'santuyadav196@gmail.com',
        number: '08303788783'
    },
    {
        name: 'santraj yadav',
        email: 'santurajyadav196@gmail.com',
        number: '08303788783'
    },
]

Detail.insertMany(seedDetails)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
