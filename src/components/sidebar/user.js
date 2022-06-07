import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const User = ({ username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} classNam="grid grid-col-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src= {`/images/avatars${username}.jpg`}
          alt=""
        />
      </div>
    </Link>
  );

export default User;

User.propTypes = {
  username: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired
};
