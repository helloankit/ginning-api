const express = require('express')
const mongoose = require('mongoose')
const app = express()
const VehicleRoute = require('./routes/vehicle.route');
// const DiaryListRoute = require('./routes/diarylist.route');
const Diary7334Route = require('./routes/diary7334');
const Diary7343Route = require('./routes/diary7343');
const Diary7344Route = require('./routes/diary7344');
const Diary7623Route = require('./routes/diary7623');
const Diary7632Route = require('./routes/diary7632');

const Diary0724Route = require('./routes/diary0724');
const Diary9764Route = require('./routes/diary9764');
const Diary5058Route = require('./routes/diary5058');
const Diary5085Route = require('./routes/diary5085');
const Diary5679Route = require('./routes/diary5679');



var cors = require('cors')

mongoose.connect( 'mongodb+srv://cluster0-xtib6.mongodb.net',
    {
        dbName:"vehicle_data",
        user:"admin",
        pass:"admin",
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)

app.use(cors());
app.use(express.json());

app.listen(3000,()=>{
   console.log("Server started at port 3000");
});

app.use('/vehicles', VehicleRoute);
app.use('/diary7334', Diary7334Route);
app.use('/diary7343', Diary7343Route);
app.use('/diary7344', Diary7344Route);
app.use('/diary7623', Diary7623Route);
app.use('/diary7632', Diary7632Route);

app.use('/diary0724', Diary0724Route);
app.use('/diary9764', Diary9764Route);
app.use('/diary5058', Diary5058Route);
app.use('/diary5085', Diary5085Route);
app.use('/diary5679', Diary5679Route);





app.get('/',(req,res,next)=>{
    res.send("You are at Home Route")
})
