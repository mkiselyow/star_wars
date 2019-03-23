import React from 'react';

import './Img.css';

const Img = ({type, id}) => {
  const url = `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`;
  return (
    <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
      <img
        className='rounded my-2 random-planet-img'
        src={url} alt=""/>
    </div>
  )
};

export default Img;