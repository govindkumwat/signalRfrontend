import logo from './logo.svg';
import './App.css';
const signalR = require("@microsoft/signalr");

function App() {
  let connection = new signalR.HubConnectionBuilder()
  .withUrl("http://4.187.147.207:8094")
  .build();

connection.on("send", data => {
  console.log(data);
});

connection.start()
  .then(() => connection.invoke("send", "Hello"));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
