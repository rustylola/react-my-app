import React from 'react';
import './App.css';

let name:string;
let age:number | string;
let isStudent:boolean;
let hobbies:string[]; // array of string number[]
let role:[number,string]; // containg number , string // role = [5,'test'];

function printName(name:string){
  console.log(name);

}

printName('John');

// type Person = {
//   name: string;
//   age?:number;
// };

// let person : Person = {
//   name: "john",
// }

// let lotsOfPerson: Person[];

// let person:Object;

function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
