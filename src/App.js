import React, {Component} from "react";
import { connect } from "react-redux";
import { sayHi } from './actions/default';
class App extends Component {

  state = {
    message: ''
  };

  componentDidMount(){
    this.props.sayHi();
  }

  componentWillReceiveProps(newProps){
    this.setState({message: newProps.app});
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }

}

const mapStateToProps = ({app}) => {
    return {
        app
    };
};

const mapDispatchToProps = dispatch => ({
  sayHi: () => dispatch(sayHi())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
