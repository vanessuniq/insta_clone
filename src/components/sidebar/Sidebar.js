import useUser from "../../hooks/useUser";
import Suggestions from "./Suggestions";
import User from "./User";

function Sidebar() {
  const { activeUser: { fullName, username, userId, following } } = useUser();
  const missingUserData = !fullName || !username || !userId ||!following
  if (missingUserData) {
    return null
  };
  return (
    <div className="p-4">
      <User fullName={fullName} userName={username} />
      <Suggestions userId={userId} following={following} />
    </div>
  )
}

export default Sidebar;
