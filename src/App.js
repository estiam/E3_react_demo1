import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';

const style = {
  color: "#FF00FF",
}

function App() {
  return (
    <div>
      Hello <span style={style}>Pinkie Pie</span>!
      <MyFirstComponent />
      <MySecondComponent />
    </div>
  );
}

export default App;
