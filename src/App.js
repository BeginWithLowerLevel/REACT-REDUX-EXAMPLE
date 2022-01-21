import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  /*-------------------------------Locally---------------------------------------------------------*/
  state = {
    age: 21,
  };
  onAgeUp = () => {
    this.setState({
      ...this.state, //create a copy
      age: ++this.state.age,
    });
  };
  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age,
    });
  };
  /*--------------------------------------------------------------------------------------------------*/
  render() {
    return (
      <div>
        <center>
          <div>
            <h1>Without Redux | Set state locally</h1>
            Age : <span>{this.state.age}</span>
            <br />
            <button onClick={this.onAgeUp}>Age UP</button>
            <button onClick={this.onAgeDown}>Age DOWN</button>
          </div>
          <div>
            <h1>With Redux | Set state globally</h1>
            Age : <span>{this.props.age}</span>
            <br />
            <button onClick={this.props.onAgeUp}>Age UP</button>
            <button onClick={this.props.onAgeDown}>Age DOWN</button>
          </div>
        </center>
      </div>
    );
  }
}

/*------------------------------------------------Globally------------------------------------------*/
const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "ADD" }),
    onAgeDown: () => dispatch({ type: "SUBSTRACT" }),
  };
};
/*---------------------------------------------------------------------------------------------------*/

export default connect(mapStateToProps, mapDispatchToProps)(App); //HOC
