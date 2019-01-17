import React, {Component} from 'react';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  render() {
    return (
      <article className='person-details container'>
        <div className='row'>
          <div className='col-12 col-sm-6 d-flex justify-content-center'>
            <figure>
              <img className='rounded' src="https://vignette.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913" alt=""/>
            </figure>
          </div>
          <div className='col-12 col-sm-6 d-flex justify-content-center align-content-middle'>
            <header className='mt-auto mb-auto'>
              <span>Random Planet Name</span>
            </header>
          </div>
        </div>
      </article>
    )
  }
}