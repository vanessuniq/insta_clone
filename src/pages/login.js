import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram"
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.png" alt="Iphone with Instagram app"/>
      </div>
      <div className="flex flex-col w-2/5">
       This will be the login form
      </div>
    </div>
  )
}

export default Login;