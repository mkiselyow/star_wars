import React from 'react';

import './Img.css';

const Img = ({imgUrl}) => {
  return (
    <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
      <img
        className='rounded my-2 random-planet-img'
        src={imgUrl} alt=""/>
    </div>
  )
};

export default Img;