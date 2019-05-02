import React, {Component} from "react";
import Img from "../Img/Img";


export default class DetailsContent extends Component {
  mapPropertiesNames(obj) {
    if (obj.typeOfItem === "people") {
      return [
        ['Gender', obj.gender],
        ['Mass', obj.mass],
        ['Height', obj.height]
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
        ['Hyperdrive Rating', obj.hyperdrive_rating]
      ];
    }
  }

  render() {
    const {id, name, ...properties} = this.props.item;
    const imageExists = this.props.imageExists;
    const propertiesObj = this.mapPropertiesNames;

    return (
      <React.Fragment>
        {imageExists ? <Img imgUrl={imageExists}/> : null}
        <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-content-middle'>
          <header className='my-3'>
            <span>{name}</span>
          </header>
          <table className="table table-hover">
            <tbody>
            <Row
              propertyName={propertiesObj(properties)[0][0]}
              propertyValue={propertiesObj(properties)[0][1]}
            />
            <Row
              propertyName={propertiesObj(properties)[1][0]}
              propertyValue={propertiesObj(properties)[1][1]}
            />
            <Row
              propertyName={propertiesObj(properties)[2][0]}
              propertyValue={propertiesObj(properties)[2][1]}
            />
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const Row = ({propertyName, propertyValue}) => {
  return (
    <tr className="table-active">
      <th scope="row">
        {propertyName}
      </th>
      <td>
        {propertyValue}
      </td>
    </tr>
  )
};