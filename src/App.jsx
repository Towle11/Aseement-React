import React from 'react';
import TodoList from './Todo'
import Counter from './Count';
import './App.css'
import Light from './Light';
function App() {
  return (
    <div className='Components'>
      <TodoList/>
      <Counter/>
      <Light/>
     
    </div>
  );
}

export default App;