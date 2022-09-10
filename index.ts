import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import './repo';
import './utils/mock/insertAuthors'
import './utils/mock/insertPosts'
import authorRouter from './features/author/route/Author.route';
import postRouter from './features/post/route/Post.route';

const server = express();
server.use(bodyParser.json({ limit: "100kb" }));
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/author', authorRouter);
server.use('/post', postRouter);

server.listen(3000, () => {
  console.log(`Server is on Port: ${3000}`);
})