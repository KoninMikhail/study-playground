import React from 'react';
import logo from './logo.svg';
import './App.css';
import ky from "ky";

const api = ky.create({
  prefixUrl: 'https://jsonplaceholder.typicode.com/'
})

const secureApi = api.extend({
  headers: {
    Authorization: 'token'
  }
})

async function getAllTodos(){
  try {
    const todos = await api
        .get('todos',{hooks: {}})
        .json();
    console.log(todos)
  } catch (err) {
      console.log((err as Error).message)
  }
}

function App() {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData();

      try {
          const todos = await api
              .post('todos', {body: formData})
              .json();
          console.log(todos)
      } catch (err) {
          console.log((err as Error).message)
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <div>
            <button onClick={getAllTodos}>GetAllTodos</button>
            <br/>
            <form onSubmit={onSubmit}>
              <input name="todo" type="text" placeholder={'new todo'}/>
              <button>addNewTodo</button>
            </form>
        </div>

      </header>
    </div>
  );
}

export default App;
