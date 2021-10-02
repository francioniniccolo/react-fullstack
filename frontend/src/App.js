import React from "react";
import {useState,useEffect} from "react";
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);

  useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
  }, []);

    useEffect(() => {
        fetch("/test")
            .then((res) => res.json())
            .then((data2) => setData(data2.message));
    }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!data ? "Loading..." : data}</p>
            <p>{!data2 ? "Loading..." : data2}</p>
        </header>
      </div>
  );
}

export default App;
