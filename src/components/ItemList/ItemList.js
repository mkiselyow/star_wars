import React, {Component} from 'react';
import './ItemList.css';
import SwapiService from "../../services/SwapiService/SwapiService";
import Spinner from "../Spinner/Spinner"
import Error from "../Error/Error";

class ItemList extends Component {

  prepareList() {
    if (this.props.data) {
      return this.props.data.map((item) => {
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
    const { data, error } = this.props;
    const content = data ? this.prepareList() : null;
    const spinner = (!data && !error) ? <Spinner/> : null;
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

const withData = (View) => {
  return class extends Component {

    swapiService = new SwapiService();

    state = {
      data: null
    };

    componentDidMount() {
      this.swapiService
        .getAllResources(this.props.itemsType)
        .then((items) => {
          this.setState({data: items});
        })
        .catch(this.onError);
    };

    onError = () => {
      this.setState({error: true});
    };

    render() {
      const props = this.props;
      const { data } = this.state;

      return <View {...props} data={data}/>;
    }
  }
};

export default withData(ItemList);