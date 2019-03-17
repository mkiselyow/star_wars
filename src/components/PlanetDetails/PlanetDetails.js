import React, {Component} from 'react';
import './PlanetDetails.css';

export default class PlanetDetails extends Component {
  render() {
    return (
      <article className='planet-details container bg-gray my-2 rounded'>
        <div className='row d-flex flex-column justify-content-center'>
          <header className='text-center  m-2'>Planet Details</header>
          <figure className='text-center d-flex flex-column m-2'>
            <img className='rounded alignSelfCenter' src="https://vignette.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913" alt=""/>
          </figure>
        </div>
        <div className='row d-flex flex-column justify-content-center mx-1'>
          <article className='itemList'>
            <ul className='list-group my-2'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>Item</li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>Item</li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>Item</li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>Item</li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>Item</li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>Item</li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>Item</li>
          </ul>
          </article>
        </div>
      </article>
    )
  }
}