import logo from './logo.svg';
import './App.css';

function App() {
  const names = [{name:"shojib",prof:"playboy"},{name:"saurav",prof:"playboy"},{name:"emon",prof:"playboy"},]
  return (
    <div className="App">
      <header className="App-header">
       <p>Future predictor</p>
       {
         names.map((item)=>(<Person name={item.name} prof={item.prof}></Person>))
       }
       
      </header>
    </div>
  );
}
function Person(props){
  
  const personStyle={
    // border: '2px solid red',
    background: 'white',
    color: '#3d3636',
    padding: "1.5rem",
    borderRadius: "20px",
    margin: '10px'
  }
  return (
  <div style={personStyle}>
   <h1>Name: {props.name}</h1>
   <h2>
     {props.prof}
   </h2>

   </div>
  );
}

export default App;
