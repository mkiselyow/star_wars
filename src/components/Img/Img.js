import React from 'react';

import './Img.css';

const Img = ({imgUrl, isFullDescription}) => {
  const className = isFullDescription
    ?'full-description-img' : 'random-planet-img';
  return (
    <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
      <img
        className={`rounded my-2 ${className}`}
        src={imgUrl} alt=""/>
    </div>
  )
};

export default Img;