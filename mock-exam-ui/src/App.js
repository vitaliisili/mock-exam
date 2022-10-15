import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {

  useEffect(() => {
    const url = "http://localhost:9002/api/question";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
