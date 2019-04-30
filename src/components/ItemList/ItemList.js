import React, {Component} from 'react';
import './ItemList.css';
import SwapiService from "../../services/SwapiService/SwapiService";
import Spinner from "../Spinner/Spinner"
import Error from "../Error/Error";

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    itemList: null
  };

  componentDidMount() {
    this.swapiService
      .getAllResources(this.props.itemsType)
      .then((items) => {
        this.setState({itemList: items});
      })
      .catch(this.onError);
  };

  onError = () => {
    this.setState({error: true});
  };

  prepareList() {
    if (this.state.itemList) {
      return this.state.itemList.map((item) => {
        return (
          <ItemListLink
            key={item.id}
            href={"#"}
            title={renderItem.call(this, item)}
            id={item.id}
            onClick={() => this.props.onItemSelected(item.id)}
          />
        )
      })
    }
  }

  render() {
    const { itemList, error } = this.state;
    const content = itemList ? this.prepareList() : null;
    const spinner = (!itemList && !error) ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;

    return (
      <article className='itemList my-2'>
        <ul className='list-group'>
          {spinner}
          {content}
          {errorMessage}
        </ul>
      </article>
    )
  }
}

const ItemListLink = ({title, onClick}) => {
  return (
    <li
      onClick={onClick}
      className='list-group-item d-flex justify-content-between align-items-center hover-color'>
      <div className='item-list-item-link'>
        {title}
      </div>
    </li>
  )
};

const renderItem = function(item) {
  switch (this.props.itemsType) {
    case 'people':
      return `${item.name} (gender: ${item.gender})`;
    case 'starships':
      return `${item.name} (cargo capacity: ${item.cargo_capacity})`;
    case 'planets':
      return `${item.name} (diameter: ${item.diameter})`;
    default:
      return item.name;
  }
};