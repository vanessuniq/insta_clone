import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";

function useAuthListener() {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        localStorage.setItem('authUser', JSON.stringify(user));
        setAuthUser(user);
      } else {
        localStorage.removeItem('authUser');
        setAuthUser(null);
      }
    })
    return () => listener();
  }, [firebase]);

  return { authUser };
};

export default useAuthListener;
