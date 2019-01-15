import React, {Component} from 'react';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  render() {
    return (
      <article className='person-details'>
        <div className='row'>
          <img className='col-md-3 offset-md-3' src="https://vignette.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913" alt=""/>
          <header className='col-md-3'>Random Planet Name</header>
        </div>
      </article>
    )
  }
}