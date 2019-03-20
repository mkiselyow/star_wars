import React, {Component} from 'react';
import './ItemList.css';
import SwapiService from "../../services/SwapiService/SwapiService";

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
      .getResource('people')
      .then((people) => {
        this.setState({peopleList: people});
      })
      .catch(this.onError);
  }

  prepareList() {
    if (this.state.peopleList) {
      return this.state.peopleList.map((person) => {
        return (
          <ItemListLink href={"#"} title={person.name}/>
        )
      })
    }
  }

  render() {
    const peopleList = this.prepareList();

    return (
      <article className='itemList my-2'>
        <ul className='list-group'>
          {peopleList}
        </ul>
      </article>
    )
  }
}

const ItemListLink = ({href, title}) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center hover-color'>
      <a className='item-list-item-link' href={href}>{title}</a>
    </li>
  )
};