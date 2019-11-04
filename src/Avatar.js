import React from 'react'

const Avatar = ({ color, initials}) => {
  const avatarStyle= {
    backgroundColor: color,
    borderRadius: '50%',
    height: '70px',
    width: '70px',
    textAlign: 'center',
    lineHeight: '65px',
    fontSize: '23px',
    margin: '5px'
  }
  return (
    <div style={avatarStyle}>
      {initials}
    </div>
  );
}

export default Avatar;