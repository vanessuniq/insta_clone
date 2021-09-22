import PropTypes  from "prop-types";

function User({ fullName, userName }) {
  return (
    <div>
      My name is {fullName}, please call me {userName}.
    </div>
  );
};

User.propTypes = {
  fullName: PropTypes.string,
  userName: PropTypes.string
};

export default User;
