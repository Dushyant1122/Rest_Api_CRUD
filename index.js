import express from "express";

import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js'

const app = express();
const PORT = 5000;

app.use( bodyParser.json() );

app.use('/posts', postRoutes)

app.get( '/', ( req, res ) => {
    res.send('hello from Express.js')
})


app.listen( PORT, () => console.log( `Server running on port: http://localhost:${ PORT }` ) );



// GET      =>    /users         finds all users
//POST      =>    /users         creates a user
//GET       =>    /users/:id     finds user details
//DELETE    =>    /user/:id      delete a user
//PATCH     =>    /users/:id     updates a user