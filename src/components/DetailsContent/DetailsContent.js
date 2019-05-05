import React, {Component} from "react";
import Img from "../Img/Img";


export default class DetailsContent extends Component {
  mapPropertiesNames(obj) {
    if (obj.typeOfItem === "people") {
      return [
        ['Gender', obj.gender],
        ['Mass', obj.mass],
        ['Height', obj.height],
        ['Hair color', obj.hairColor],
        ['Skin color', obj.skinColor],
        ['Eye color', obj.eyeColor],
        ['Birth year', obj.birthYear],
        ['Home world', obj.homeWorld],
        ['Films', obj.films],
        ['Species', obj.species],
        ['Vehicles', obj.vehicles],
        ['Star ships', obj.starships]
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
    const { imageExists, isFullDescription } = this.props;
    const rows = <Rows propertiesObj={this.mapPropertiesNames}
                       properties={properties}
                       isFullDescription={isFullDescription}/>;

    return (
      <React.Fragment>
        {imageExists
          ? <Img imgUrl={imageExists}
                 isFullDescription={isFullDescription}/>
          : null}
        <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-content-middle'>
          <header className='my-3'>
            <span>{name}</span>
          </header>
          <table className="table table-hover">
            {rows}
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

const Rows = ({propertiesObj, properties, isFullDescription}) => {
  const rows = propertiesObj(properties)
    .map((property, index) => {
      let tmp;
      if (isFullDescription || (!isFullDescription && index < 3)) {
        tmp = (
        <Row
          key={index}
          propertyName={property[0]}
          propertyValue={property[1]}
        />)}
      return tmp;
  });

  return (
    <tbody>
      {rows}
    </tbody>
  )
};