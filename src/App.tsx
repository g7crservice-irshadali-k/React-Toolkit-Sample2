import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './redux/store';
import { getTodos } from './redux/todos/todoSlice';


function App() {

  const dispatch = useDispatch<AppDispatch>();

  const getTodosfromAPI = () => {
    console.log('Function called');
    dispatch(getTodos());
  }

  const { loading, data, error } = useSelector((state: any) => state.getTodos)

  useEffect(() => {
    console.log(data);
  }, [loading])


  useEffect(() => {
    dispatch(getTodos)
  }, [])

  return (
    <div className="App">
      <button onClick={getTodosfromAPI}>Get Todos</button><br></br>
      {!loading ?
        <ol>
          {data?.map((c: any) => (
            <li style={{ color: "#0D6EFD" }}>
              <div className="icon"><i className="fa-brands fa-codepen"></i></div>
              <div className="title">{c.name}</div>
              <div className="descr">{c.body}</div>
            </li>
          ))
          }
        </ol>
        : <span>Loading...</span>}
    </div>
  );
}

export default App;
