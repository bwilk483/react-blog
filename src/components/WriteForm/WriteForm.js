import React from "react";
import "./writeForm.css";

import { FaPlus } from "react-icons/fa";

const WriteForm = () => {
  return (
    <div className="writContainer">
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        ></img>
        <form className="writeForm">
          <div className="writeFormGroup">
            <label className="writeLabel" htmlFor="fileInput">
              <FaPlus size={25} className="writeIcon" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
            <input
              type="text"
              placeholder="title"
              className="writeInput"
              autoFocus={true}
            ></input>
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell Your Story"
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default WriteForm;
