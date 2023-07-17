import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createPostConstroller,
  deletePostController,
  postController,
  postCountController,
  postListController,
  updatePostController,
} from "../controllers/postController.js";

const router = express.Router();
//routes
router.post("/create-post", requireSignIn, createPostConstroller);

//update post
router.put("/update-post/:id", requireSignIn, updatePostController);

// get All post
router.get("/get-post", postController);

// delete category
router.delete("/delete-post/:id", requireSignIn, deletePostController);

// post count
router.get("/post-count", postCountController);

// post per page
router.get("/post-list/:page", postListController);
export default router;
