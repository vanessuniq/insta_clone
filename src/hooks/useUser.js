import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { authUser } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const user = await getUserByUserId(authUser.uid);
      setActiveUser(user);
    }
    if (authUser) {
      getUserObjByUserId();
    }
  }, [authUser]);
  return { activeUser };
};

export default useUser;
