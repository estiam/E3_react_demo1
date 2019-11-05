import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import MyClassComponent from './MyClassComponent';
import UserBlock from './UserBlock';

const style = {
  color: "#FF00FF",
}

function App() {
  return (
    <div>
      Hello <span style={style}>Pinkie Pie</span>!
      <MyFirstComponent />
      <MySecondComponent />
      <MyClassComponent />
      <div>
        <UserBlock
          color='#444'
          firstName='Kate'
          lastName='Kane'
        />
        <UserBlock
          color='#FAC'
          firstName='Martha'
          lastName='Wayne'
        />
        <UserBlock
          color='#F1F'
          firstName='Clark'
          lastName='Kent'
        />
        <UserBlock
          color='#5FC'
          firstName='Lana'
          lastName='Lang'
        />
        <UserBlock
          color='#CC1'
          firstName='Loïs'
          lastName='Lane'
        />
      </div>
    </div>
  );
}

export default App;
