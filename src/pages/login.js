import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DASHBOARD, SIGN_UP } from "../constants/routes";
import FirebaseContext from "../context/firebase";

function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [credentials, setCredentials] = useState({
    emailAddress: "",
    password: ""
  });
  const [error, setError] = useState("");
  const isInvalid = credentials.emailAddress === "" || credentials.password === "";

  const handleInputChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(credentials.emailAddress, credentials.password);
      history.push(DASHBOARD);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram"
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

          <form onSubmit={handleLogin}>
            <input aria-label="Enter your email address" type="text" name="emailAddress"
              placeholder="Email Address" onChange={handleInputChange} value={credentials.emailAddress}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"/>
            
              <input aria-label="Enter your password" type="text" name="password"
                placeholder="Password" onChange={handleInputChange} value={credentials.password}
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"/>

              <button disabled={isInvalid} type="submit" 
                className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}>
                Log In
              </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white 
          p-4 border border-gray-primary rounded">
          <p className="text-sm">Don't have an account?{` `}
          <Link to={SIGN_UP} className="font-bold text-blue-medium">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;