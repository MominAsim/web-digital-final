import React from "react";

const Register = () => {
return (
     <>
     <div className="register_page">
     <div className="register_card">
     <p className="loginorregisterh1">REGISTER</p>
     <input id="username_box" type="text" name="USERNAME" placeholder="USERNAME"></input>
     <br></br>
     <input className="email_box" type="text" name="Email" placeholder="EMAIL"></input>
     <br></br>
     <input className="password_box" type="text" name="PASSWORD" placeholder="PASSWORD"></input>
     </div>
     </div>
     </>
  );
};
export default Register;