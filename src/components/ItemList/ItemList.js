import React, {Component} from 'react';
import './ItemList.css';
import SwapiService from "../../services/SwapiService/SwapiService";
import Spinner from "../Spinner/Spinner"

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
          <ItemListLink
            key={person.id}
            href={"#"}
            title={person.name}
            id={person.id}
            onClick={() => this.props.onItemSelected(person.id)}
          />
        )
      })
    }
  }

  render() {
    const { peopleList } = this.state;
    const content = peopleList ? this.prepareList() : null;
    const spinner = !peopleList ? <Spinner/> : null;

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