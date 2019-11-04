import React from 'react'
import Avatar from './Avatar';

const blockStyle = {
  display: 'flex',
  flexDirection: 'row' 
}

const UserBlock = ({ firstName, lastName }) => {
  // const initialsParams = firstName[0].toUpperCase() + lastName[0].toUpperCase();

  return (
    <div style={blockStyle}>
      {/* <div>
        {firstName[0].toUpperCase()}{lastName[0].toUpperCase()}
      </div> */}
      <Avatar 
        color='#4A4'
        // initials={initialsParams}
        initials={`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}
      />
      <h2>{firstName} {lastName}</h2>
    </div>
  );
}

export default UserBlock;