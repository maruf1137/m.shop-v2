import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function UserAuth() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div className="white">Loading...</div>;
  }
  if (error) {
    return <div className="white">Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        {/* Hello {user.name}{" "} */}
        {/* <figure className="user-image">
          <img src={user.picture} alt={user.name} />
        </figure> */}
        <button
          className="btn btn-logout"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <button className="btn btn-login" onClick={loginWithRedirect}>
        Log in
      </button>
    );
  }
}

export default UserAuth;
