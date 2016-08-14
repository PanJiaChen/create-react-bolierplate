import React, {Component} from "react";
import logo from '../static/img/logo.svg';
import "./layout.scss";

class Layout extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to Reacta apple banana orange</h2>
          </div>
          <p className="App-intro apple">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
            <div className="layout-content">
                {this.props.children}
            </div>
        </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object
};
export default Layout;
