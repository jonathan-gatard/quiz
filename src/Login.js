import React, { useState } from "react";
import "./form.css";

function Login(props) {
  //Here I define the states : uid null at the begining
  const [uid, setUid] = useState("");

  //Function called when submit button form is clicked
  const handleSubmit = (event) => {
    //Prevent page refresh
    event.preventDefault();
    //Check if uid are not empty
    if (uid) {
      //Create userInfo as object name + uid
      const userInfo = { name, uid };
      //Call function onLogin of parent and send userInfo
      props.onLogin(userInfo);
    }
  };

  return (
    <div className="container">
      Utilisateurs qui marchent : SC24461 ou 12345678
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="uid">UID:</label>
          <input
            type="text"
            id="uid"
            value={uid}
            required
            onChange={(event) => setUid(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
