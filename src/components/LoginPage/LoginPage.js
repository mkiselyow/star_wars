import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin}) => {
  if (isLoggedIn) {
    return <Redirect to='/secret' />;
  }

  if (!isLoggedIn) {
    return (
      <div className="jumbotron text-center my-3">
        <h3>Login to the secret page</h3>
        <button
          className="btn btn-primary"
          onClick={onLogin}>
          Login
        </button>
      </div>
    )
  }

  return <p>You are logged in.</p>
};

export default LoginPage;