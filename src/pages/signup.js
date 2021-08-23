import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../constants/routes";
import FirebaseContext from "../context/firebase";

function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [signUpData, setSignUpData] = useState({
    emailAddress: "",
    password: "",
    username: "",
    fullName: ""
  });
  const [error, setError] = useState("");
  const isInvalid = signUpData.emailAddress === "" || signUpData.password === "";

  const handleInputChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value
    })
  }
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(signUpData.emailAddress, signUpData.password);
      history.push(DASHBOARD);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Sign up - Instagram"
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.png" alt="Iphone with Instagram app"/>
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded mb-4">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{ error }</p>}

          <form onSubmit={handleSignUp}>
            <input aria-label="Enter your username" type="text" name="username"
              placeholder="Username" onChange={handleInputChange} value={signUpData.username}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"/>
            
            <input aria-label="Enter your full name" type="text" name="fullName"
              placeholder="Full Name" onChange={handleInputChange} value={signUpData.fullName}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"/>
            
            <input aria-label="Enter your email address" type="text" name="emailAddress"
              placeholder="Email Address" onChange={handleInputChange} value={signUpData.emailAddress}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"/>
            
            <input aria-label="Enter your password" type="text" name="password"
              placeholder="Password" onChange={handleInputChange} value={signUpData.password}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"/>

            <button disabled={isInvalid} type="submit" 
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white 
          p-4 border border-gray-primary rounded">
          <p className="text-sm">Already have an account?{` `}
            <Link to={LOGIN} className="font-bold text-blue-medium">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;