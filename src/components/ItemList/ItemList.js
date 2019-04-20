import React, {Component} from 'react';
import './ItemList.css';
import SwapiService from "../../services/SwapiService/SwapiService";
import Spinner from "../Spinner/Spinner"

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
    this.props.pageOnError();
  };

  prepareList() {
    if (this.state.itemList) {
      return this.state.itemList.map((item) => {
        return (
          <ItemListLink
            key={item.id}
            href={"#"}
            title={item.name}
            id={item.id}
            onClick={() => this.props.onItemSelected(item.id)}
          />
        )
      })
    }
  }

  render() {
    const { itemList } = this.state;
    const content = itemList ? this.prepareList() : null;
    const spinner = !itemList ? <Spinner/> : null;

    return (
      <article className='itemList my-2'>
        <ul className='list-group'>
          {spinner}
          {content}
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