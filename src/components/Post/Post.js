import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      ></img>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">The Title of the Post</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Tempor ea adipisicing nulla voluptate minim proident reprehenderit
        voluptate ea consectetur nulla consequat pariatur consectetur. Eu
        eiusmod in fugiat consequat cillum nulla fugiat. Non aute reprehenderit
        in incididunt enim sint consectetur occaecat aliquip voluptate sit enim
        commodo sunt.
      </p>
    </div>
  );
};

export default Post;
