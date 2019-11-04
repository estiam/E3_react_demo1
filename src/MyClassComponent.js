import React, { Component } from 'react'

class MyClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      name: "Thomas Wayne",
    }
  }

  render() {
    // setTimeout(() => {
    //   this.setState({name: "Martha Wayne"});
    // },3000);
    const clickHandler = () => this.setState({ name: "Martha Wayne" });

    return (
      <div>
        <div>ClassComponent: {this.state.name}</div>
        <button onClick={clickHandler}>
          Click me !
        </button>
      </div>
    );
  }
}

export default MyClassComponent;