import React from "react";
import { Link, useParams } from "react-router";

const UserDetailsInfo = () => {
  const paramsData = useParams();
  // console.log(paramsData)
  return (
    <div>
      <h3 style={{ marginTop: "150px" }}>This is UserDetailsInfo Page</h3>
      <h4>{paramsData.id}</h4>
      <div>
        <h4>{paramsData.age}</h4>
      </div>
    </div>
  );
};

export default UserDetailsInfo;
