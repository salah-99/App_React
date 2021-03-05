import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [category, setCategory] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response)=>{
      setCategory(response.data);
    });
  }, [])

  const add = () =>{
    Axios.post("http://localhost:3001/insert", {name: name, question: question, answer: answer});
  };

  return (
    <div className="App">
      <div className="container">
        <h1></h1>
        <div className="input-group mb-3">
          <input type="text" onChange={(event) => {setName(event.target.value)}} placeholder="Category Name" required/>
        </div>
        <div className="input-group mb-3">
          <input type="text" onChange={(event) => {setQuestion(event.target.value)}} placeholder="Question" required/>
        </div>
        <div className="input-group mb-3">
          <input type="text" onChange={(event) => {setAnswer(event.target.value)}} placeholder="Answer" required/>
        </div>
        <div className="input-group mb-3">
          <button onClick={add} >ADD</button>
        </div>
        {category.map((val, key) =>{
          return <div key={key}> <h1> {val.name} </h1> <h2> {val.question} </h2> <h3> {val.answer} </h3> </div>
        })}
      </div>
    </div>
  );
}

export default ;
