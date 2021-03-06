import React, {Component} from "react";
import { connect } from "react-redux";
import {appActions, totalSelector} from './ducks/';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Landing from "../landing/";

export class App extends Component {

  state = {
    message: '',
    shop: {
      taxPercent: 8,
      items: [
          { name: 'apple', value: 1.20 },
          { name: 'orange', value: 0.95 },
      ]
    }
  };

  componentDidMount(){
    this.props.sayHi();
    this.props.sayYeah();
    this.props.doPing();
    console.log(totalSelector(this.state));
  }

  componentWillReceiveProps(newProps){
    this.setState({message: newProps.message});
  }

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/test" render={() => <div> This is Test </div>} />
            </Switch>
        </BrowserRouter>
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
  sayYeah: () => dispatch(appActions.sayYeah()),
  doPing: () => dispatch(appActions.doPing())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
