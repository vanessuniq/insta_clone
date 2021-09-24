import useUser from "../../hooks/useUser";
import Suggestions from "./Suggestions";
import User from "./User";

function Sidebar() {
  const { activeUser: { fullName, username, userId } } = useUser();
  if (!fullName || !username || !userId) {
    return null
  };
  return (
    <div className="p-4">
      <User fullName={fullName} userName={username} />
      <Suggestions userId={userId} />
    </div>
  )
}

export default Sidebar;
