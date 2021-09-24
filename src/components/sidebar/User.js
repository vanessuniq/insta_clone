import PropTypes  from "prop-types";
import { Link } from "react-router-dom";

function User({ fullName, userName }) {
  
  return (
    <Link to={`/p/${userName}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <img className="flex rounded-full w-16 mr-3"
          src={`/images/avatars/${userName}.jpg`}
          alt={`${userName} profile`}
          onError={(error) => {
            error.target.src= "/images/avatars/default.png"
          }}
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{userName}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
};

export default User;

User.propTypes = {
  fullName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};
