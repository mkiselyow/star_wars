import React, {Component} from 'react';


const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {
      this.props.swapiService
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