import React from "react";
import "./Login.css";
import GoogleLogin from "react-google-login";

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login</h1>
        <br />
        <br />
        <GoogleLogin
          clientId="744012602399-qn4le4lerfa860ggif96vmct9ktja2ap.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
      </div>
    </div>
  );
}

export default Login;
