import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';

const app = express();



app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

// define routes
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

app.get('/',(req,res)=>{
    res.send('Hello to Memories-BN API');
});

dotenv.config();
// const CONNECTION_URL = 'mongodb+srv://memories-admin:Abc123@cluster0.2cikv.mongodb.net/Memories?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port:${PORT}`)))
    .catch((error)=>console.log(error.message));

    // const router = express.Router();
    // app.use('/posts',router);
    // //http://localhost:5000/posts/
    // router.get('/',(req,res)=>{
    //     res.send('This works!');
    // });


// mongoose.set('useFindAndModify',false);
