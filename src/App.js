// import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h2>{props.heading}</h2>
      <p>{props.para}</p>
      <p>{props.secondpara}</p>
      <img src={props.img} />
    </div>
  );
}


export default App;