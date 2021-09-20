import { useContext, useEffect } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

function Sidebar() {
  const { authUser} = useContext(UserContext)
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
  console.log({docs: getUserByUserId(authUser.uid)})
  return (
    <div className="">
     I am the sidebar.
    </div>
  )
 };
 
 export default Sidebar;
 