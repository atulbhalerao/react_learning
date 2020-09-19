import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import CreditCardForm from './Components/CreditCardForm';
import MyComponent from './Components/MyComponent';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div className="App">
      {/* <MyComponent name="Atul"></MyComponent> */}
      <HelloWorld></HelloWorld>
      {/* <AddEmployee></AddEmployee>
      <CreditCardForm></CreditCardForm> */}
    </div>
  );
}

export default App;
