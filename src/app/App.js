import React, {Component} from "react";
import { connect } from "react-redux";
import {appActions} from './ducks/';
class App extends Component {

  state = {
    message: ''
  };

  componentDidMount(){
    this.props.sayHi();
    this.props.sayYeah();
  }

  componentWillReceiveProps(newProps){
    this.setState({message: newProps.message});
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }

}

const mapStateToProps = ({app: {appReducer}}) => {
    return {
        message: appReducer
    };
};

const mapDispatchToProps = dispatch => ({
  sayHi: () => dispatch(appActions.sayHi()),
  sayYeah: () => dispatch(appActions.sayYeah())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
