import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';


// F.C is Functional Component
// Type React. to view all types of it
const App:React.FC = () => {

  const [todo,setTodo] = useState<string>("");
  
  return (
    <div className="App">
      <span className="heading">TaskTify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
