//There are different ways to call API, (fetch, axios, react-query)

import { useState, useEffect } from 'react'
import './App.css'
import axios  from "axios";

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data); //append here, (data is present inside response)
    })
    .catch((error) => {
      console.log(error);
    });
  
  })
  
  return (
    <>
      <h1>Hello React! | Full Stack</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (  //we use curly braces when returning anything
          //used key for "optimization" and used here because it's the "repeating element"
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

//can also use like this 
// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }