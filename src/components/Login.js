import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

function Login() {
  const history = useHistory();

  const [user, setUser] = useState();

  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
    // set the state of the user
    setUser(data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(data));
    // redirect
    history.push("/");
  });

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login</h1>
        <main className="login__formcontainer">
          <form onSubmit={onSubmit}>
            <div>
              <input
                ref={register({ required: true })}
                id="firstname"
                name="firstname"
                type="text"
                placeholder="FirstName"
                className="login__input"
              />
              {errors.firstname && (
                <div className="login__error">Enter your name</div>
              )}
            </div>
            <div>
              <input
                ref={register({ required: true })}
                id="lastname"
                name="lastname"
                type="text"
                placeholder="LastName"
                className="login__input"
              />
              {errors.lastname && (
                <div className="login__error">Enter your last name</div>
              )}
            </div>
            <div>
              <input
                ref={register({ required: true })}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="login__input"
              />
              {errors.password && (
                <div className="login__error">Enter your Password</div>
              )}
            </div>
            <button className="login__btn" type="submit">
              Sign In
            </button>
          </form>
        </main>
        <br />
        <h3 className="login__or">Or Login with</h3>
        <br />
        <div className="login__social">
          <GoogleLogin
            clientId="744012602399-qn4le4lerfa860ggif96vmct9ktja2ap.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLogin
            appId="426805741737613"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
