import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';

const style = {
  color: "#FF00FF",
}

function App() {
  return (
    <div>
      Hello <span style={style}>Pinkie Pie</span>!
      <MyFirstComponent />
    </div>
  );
}

export default App;
