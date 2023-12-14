const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect('mongodb+srv://RiteshWanave:trqGh2CGDX-qSeB@weo.2n9yh.mongodb.net/assignment', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

const UserSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
    }
});

const User = mongoose.model('User', UserSchema);


app.use(express.static('frontend'));
app.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!.....`));