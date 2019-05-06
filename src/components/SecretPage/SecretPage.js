import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {
  if (isLoggedIn) {  return (
    <div className="jumbotron text-center my-3">
      <h3>This page is full of secrers!!!</h3>
    </div>
  );}

  return <Redirect to='/login'/>;
};

export default SecretPage;