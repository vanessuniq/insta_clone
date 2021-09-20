import { useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

function Sidebar() {
  const { authUser} = useContext(UserContext)
  console.log({docs: getUserByUserId(authUser.uid)})
  return (
    <div className="">
     I am the sidebar.
    </div>
  )
 };
 
 export default Sidebar;
 