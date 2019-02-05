import React, {Component} from 'react';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  render() {
    return (
      <article className='person-details container bg-gray rounded'>
        <div className='row'>
          <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
            <img className='rounded my-2' src="https://vignette.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913" alt=""/>
          </div>
          <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-content-middle'>
            <header className='mt-auto mb-auto'>
              <span>Random Planet Name</span>
            </header>
            <table className="table table-hover">
              <tbody>
                <tr className="table-active">
                  <th scope="row">Population</th>
                  <td>1000000</td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Rotation Period</th>
                  <td>22</td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Diameter</th>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    )
  }
}