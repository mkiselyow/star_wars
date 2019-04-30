import React, {Component} from 'react';
import SwapiService from "../../services/SwapiService/SwapiService";


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

export default withData;