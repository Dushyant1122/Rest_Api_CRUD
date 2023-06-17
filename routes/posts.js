import express from "express";

import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";



const router = express.Router();


router.get("/", getPosts);

router.post("/", createPost);

router.get( "/:id", getPost )

router.delete( '/:id', deletePost)

router.patch( '/:id',updatePost )

export default router;
