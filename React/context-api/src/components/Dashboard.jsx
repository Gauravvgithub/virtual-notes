import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div
      style={{
        border: "5px solid green",
        padding: "2rem",
        fontFamily: "monospace",
      }}
    >
      {user ? (
        <>
          <h1>Hello, {user.name}</h1>
          <h2>My Mail {user.email}</h2>
          <img src={user.imgSrc} alt="user img" style={{width:"200px"}}/>
          <button onClick={logout} style={{margin:"0", display
            :"flex", alignItems:"center", justifyContent:"center", border:"none", backgroundColor:"lightgoldenrodyellow",width:"100%"
          }}>logout</button>
        </>
      ) : (
        <>
          <h1>You are not logged in....</h1>
          <button onClick={login} style={{margin:"0", display
            :"flex", alignItems:"center", justifyContent:"center", border:"none", backgroundColor:"lightgoldenrodyellow",width:"100%"
          }} >login</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
