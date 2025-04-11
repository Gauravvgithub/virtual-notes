import React from "react";
import { Link } from "react-router";

const UserDetails = () => {
  const userData = [
    { id: 1, name: "mike", age: 22 },
    { id: 2, name: "jake", age: 35 },
    { id: 3, name: "liya", age: 18 },
    { id: 4, name: "jonny", age: 55 },
    { id: 5, name: "willam", age: 40 },
    { id: 6, name: "jacob", age: 39 },
  ];
  return (
    <div style={{ marginTop: "150px" }}>
      <h2>This is User Details</h2>
      {userData.map((item, index) => (
        <h3 key={index}>
          
            <Link
            
              style={{ textDecoration: "none", color: "white" }}
              to={`/users/${item.age}`}
            >
              <button type="button" className="btn btn-primary" style={{width:"10rem"}}>{item.name}</button>
            </Link>
        </h3>
      ))}
      
    </div>
  );
};

export default UserDetails;
