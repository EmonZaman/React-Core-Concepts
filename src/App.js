import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name: "name",
    job: "none"

  }
  var style={
    color: 'red',
  }
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
          rel="noopener nor eferrer"
        >
        <p className="" style={style}>{person.name} and his profession is {person.job }</p>
          Learn React
          and Enjoy
        </a>
      </header>
    </div>
  );
}

export default App;
