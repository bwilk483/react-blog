import React from "react";
import "./singlePost.css";

import { FaTrashAlt, FaEdit } from "react-icons/fa";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="SPWrapper">
        <img
          className="SPImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        ></img>
        <h1 className="SPTitle">
          Single post Title
          <div className="SPEdit">
            <FaEdit
              size={20}
              style={{ color: "black", marginRight: "1rem", cursor: "pointer" }}
            />
            <FaTrashAlt
              size={20}
              style={{
                color: "red",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
        </h1>
        <div className="SPInfo">
          <span className="SPAuthor">
            Author: <b>Bryan Wilkerson</b>
          </span>
          <span className="SPDate">1 hour ago</span>
        </div>
        <p className="SPDesc">
          Laborum consectetur nisi elit ea consequat laboris. Adipisicing id
          reprehenderit eiusmod excepteur velit. Occaecat amet cillum irure ea
          nostrud nostrud consequat velit qui ullamco anim culpa sit. Ex
          voluptate sint ea tempor cillum laboris labore aliqua aliqua tempor
          qui ut. Culpa in voluptate cillum amet incididunt veniam pariatur esse
          consectetur aliquip. Elit eiusmod minim cupidatat pariatur ad officia
          reprehenderit elit eu nisi adipisicing tempor ullamco. Aute mollit
          minim non culpa consectetur mollit sint irure reprehenderit
          consectetur anim eu tempor dolor. Consectetur consectetur aliqua aute
          culpa aute cillum ipsum occaecat sunt dolore Lorem. Enim incididunt
          Lorem aliquip ex officia ex veniam quis ex excepteur ex exercitation
          ut. Non irure nostrud anim laboris cupidatat nulla. Consectetur
          voluptate sit et sint cillum. Et sint labore commodo mollit officia
          est exercitation cupidatat Lorem cupidatat. Aliquip sit amet esse esse
          irure ipsum tempor cillum nisi velit quis. Et fugiat amet ea enim ut.
          Fugiat pariatur ex tempor mollit sit irure officia sunt. Pariatur
          cupidatat amet minim consequat sit et. Pariatur veniam est culpa
          deserunt. Anim ex sit occaecat esse officia officia. Commodo commodo
          nulla amet amet ad. Esse sint labore id adipisicing non. Occaecat elit
          aute sit dolore nisi nisi. Voluptate cillum magna ad velit occaecat
          Lorem eiusmod sit. Ad nostrud et ex magna labore voluptate cupidatat
          adipisicing ipsum non do commodo laboris.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
