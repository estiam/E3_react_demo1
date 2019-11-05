import React, { Component } from 'react'
import Avatar from './Avatar';

const blockStyle = {
  display: 'flex',
  flexDirection: 'row'
}

//#region function

// const UserBlock = ({ color, firstName, lastName }) => {
//   // const initialsParams = firstName[0].toUpperCase() + lastName[0].toUpperCase();
//   return (
//     <div style={blockStyle}>
//       {/* <div>
//         {firstName[0].toUpperCase()}{lastName[0].toUpperCase()}
//       </div> */}
//       <Avatar 
//         color={color ? color : '#888'}
//         // initials={initialsParams} si on utilise pas l'expression en dessous
//         initials={`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}
//       />
//       <h2>{firstName} {lastName}</h2>
//     </div>
//   );
// }
//#endregion

class UserBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;

    return (
      <div style={blockStyle}>
        <Avatar
          color={this.props.color ? this.props.color : '#888'}
          initials={`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}
        />
        <h2>{firstName} {lastName}</h2>
      </div>
    );
  }
}

export default UserBlock;