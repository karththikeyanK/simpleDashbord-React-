import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../../../src/dynamicStyle.json";


import User from "./../../../asserts/images/user.png"

const SampleHeader = () => {
  const profileImagePath = style.profileImage
  return (
    <div
      className="p-3 border d-flex justify-content-between"
      style={{ backgroundColor: style.headerColour }}
    >
      <div>
        <h2>Eimsky</h2>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="d-flex align-items-center">User Name</div>
        <div>
          <img
            src={profileImagePath}
            className="rounded-circle"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  )
}

export default SampleHeader
