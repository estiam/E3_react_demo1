import React, { Component } from 'react'
import UserBlock from './UserBlock';

class MyClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Thomas",
      lastName: "Wayne",
    }
  }

  render() {
    const clickHandler = () => {
      this.setState({ firstName: "Martha", lastName: "Wayne" });
      // this.state.name = "Martha Wayne" // << NE MARCHE PAS
    }

    return (
      <div>
        {/* <div>ClassComponent: {this.state.name}</div> */}
        <UserBlock
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        
        <button onClick={clickHandler}>
          Click me !
        </button>
      </div>
    );
  }
}

export default MyClassComponent;