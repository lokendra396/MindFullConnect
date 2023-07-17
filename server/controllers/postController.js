import postModel from "../models/postModel.js";

export const createPostConstroller = async (req, res) => {
  try {
    const { name, story } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }
    const post = await new postModel({ name, story }).save();
    res.status(201).send({
      success: true,
      message: "new Post created",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Post",
    });
  }
};

//update Post
export const updatePostController = async (req, res) => {
  try {
    const { name, story } = req.body;
    const { id } = req.params;
    const post = await postModel.findByIdAndUpdate(
      id,
      { name, story },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Post updated Successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Post",
    });
  }
};

//get all post
export const postController = async (req, res) => {
  try {
    const post = await postModel.find({});
    res.status(200).send({
      success: true,
      message: "All post List",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(200);
  }
};
// delete post
export const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    await postModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Post Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting post",
      error,
    });
  }
};
