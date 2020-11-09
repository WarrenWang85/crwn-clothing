import React, { useState } from "react";
import "./SignIn.scss";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCreditials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCreditials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.state({ email: "", password: "" });
    // } catch (error) {
    //   console.error(error);
    // }
    // setCredentials({ email: "", password: "" });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCreditials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={handleChange}
          value={email}
          required
        />

        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          label="password"
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
