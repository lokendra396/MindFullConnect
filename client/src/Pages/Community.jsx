import React, { useState, useEffect } from "react";
import Nav from "../components/Nav_nothome";
import defpp from "../components/defpp.jpg";
import "./Community.css";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal } from "antd";
const Community = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = "InnerCalm - Community";
    // Clean up document title when component unmounts
    return () => {
      document.title = "InnerCalm";
    };
  }, []);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPost, setUpdatedPost] = useState("");
  const [visible, setVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [suberr, setSubErr] = useState(false);
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [sharesection, setSharesection] = useState({});
  const [cmtpg, setCPGbg] = useState("cmnitypage");
  const [allposts, setAllPosts] = useState([]);
  const handleShareClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/post/create-post", {
        name,
        story,
      });
      if (data?.success) {
        toast.success("post is created");
        handleCloseForm();
        FetchPosts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in input: form");
    }
  };

  // const NOSERVERSTYLE = {
  //   fontFamily: "'Poppins',sans-serif",
  //   color: "white",
  // };
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`/api/v1/post/delete-post/${pId}`);
      if (data.success) {
        toast.success("post is Deleted");
        FetchPosts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const handleCloseForm = () => {
    setName("");
    setStory("");
    setShowForm(false);
    setSubErr(false);
  };

  setInterval(() => {
    setCPGbg("cmnitypage linearbgcmitypg");
  }, 800);

  const FetchPosts = async () => {
    try {
      const { data } = await axios.get("/api/v1/post/get-post");
      if (data.success) {
        setAllPosts(data.post);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting post");
    }
  };

  useEffect(() => {
    FetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update Post
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/post/update-post/${selected._id}`,
        { name: updatedName, post: updatedPost }
      );
      if (data.success) {
        toast.success("post updated successfully");
        setSelected(null);
        setUpdatedName("");
        setUpdatedPost("");
        setVisible(false);
        FetchPosts();
      } else {
        toast.error("error in updating post");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Nav />
      <div className="CMT">
        <div className={cmtpg}>
          <header>
            We believe that by sharing our experiences, we can help others feel
            less alone and inspire them to seek the help they need. Join us in
            creating a supportive and inclusive space where everyone's voice is
            heard.
          </header>
          <h1 className="head_st">Stories of People</h1>

          <div className="allposts">
            {allposts?.map((val) => {
              return (
                <>
                  <div className="post">
                    <div className="posthead">
                      <img src={defpp} alt="" />
                      {/* <p style={{ margin: "0px" }} className="name">
                        {"User" + Math.floor(Math.random() * 1000000)}
                      </p> */}
                      <p>{val.name}</p>
                    </div>

                    <div className="post_content">
                      <p className="post_text">{val.story}</p>
                    </div>
                    <button
                      className="btn btn-primary ms-2"
                      onClick={() => {
                        setVisible(true);
                        setUpdatedName(val.name);
                        setUpdatedPost(val.post);
                        setSelected(val);
                      }}
                    >
                      Edit
                    </button>
                    <botton
                      className="btn btn-danger ms-2"
                      onClick={() => {
                        handleDelete(val._id);
                      }}
                    >
                      Delete
                    </botton>
                  </div>
                  <Modal
                    onCancel={() => setVisible(false)}
                    footer={null}
                    visible={visible}
                  >
                    <form onSubmit={handleUpdate}>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Edit Post
                        </label>
                        <input
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name"
                          value={updatedName}
                          onChange={(e) => setUpdatedName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Updated Post Content
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          defaultValue={""}
                          value={updatedPost}
                          onChange={(e) => setUpdatedPost(e.target.post)}
                        />
                      </div>
                      <button className="share_btn"> submit </button>
                    </form>
                  </Modal>
                </>
              );
            })}
          </div>

          <div style={sharesection} className="sharesection">
            <button className="share_btn" onClick={handleShareClick}>
              Share your story
            </button>
          </div>

          {showForm && (
            <div className="form-popup">
              <form onSubmit={handleSubmit}>
                <h3>Share Your Story</h3>
                <label htmlFor="name">
                  Name: <span>(Your name will be hidden)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="story">Your Story:</label>
                <textarea
                  rows={10}
                  name="story"
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                />
                {suberr ? (
                  <span className="errormessage">
                    {" "}
                    *Error Posting, Please try again.
                  </span>
                ) : (
                  <></>
                )}
                <div className="form-buttons">
                  <button type="submit" className="submitbtn">
                    Submit
                  </button>
                  <button
                    className="closebtn"
                    type="button"
                    onClick={handleCloseForm}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Community;
