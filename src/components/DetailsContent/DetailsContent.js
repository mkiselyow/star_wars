import React, {Component} from "react";
import Img from "../Img/Img";


export default class DetailsContent extends Component {
  mapPropertiesNames(obj) {
    if (obj.typeOfItem === "people") {
      return [
        ['Gender', obj.gender],
        ['Mass', obj.mass],
        ['Mass', obj.mass]
      ];
    } else if (obj.typeOfItem === "planets") {
      return [
        ['Population', obj.population],
        ['Rotation Period', obj.rotationPeriod],
        ['Diameter', obj.diameter]
      ];
    } else if (obj.typeOfItem === "starships") {
      return [
        ['Cargo Capacity', obj.cargo_capacity],
        ['Passengers', obj.passengers],
        ['Passengers', obj.passengers]
      ];
    }
  }

  render() {
    const {id, name, ...properties} = this.props.item;
    const imageExists = this.props.imageExists;

    return (
      <React.Fragment>
        {imageExists ? <Img type={properties.typeOfItem} id={id}/> : null}
        <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-content-middle'>
          <header className='my-3'>
            <span>{name}</span>
          </header>
          <table className="table table-hover">
            <tbody>
            <tr className="table-active">
              <th scope="row">
                {this.mapPropertiesNames(properties)[0][0]}
              </th>
              <td>
                {this.mapPropertiesNames(properties)[0][1]}
              </td>
            </tr>
            <tr className="table-active">
              <th scope="row">
                {this.mapPropertiesNames(properties)[1][0]}
              </th>
              <td>
                {this.mapPropertiesNames(properties)[1][1]}
              </td>
            </tr>
            <tr className="table-active">
              <th scope="row">
                {this.mapPropertiesNames(properties)[2][0]}
              </th>
              <td>
                {this.mapPropertiesNames(properties)[2][1]}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}