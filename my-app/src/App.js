
import logo from './logo.svg';
import './App.css';
import Increment from './components/Greet';
import SignupForm from './components/signup';
import Calculator from './components/task2';



  function App() {
    return (
      <div className="App">
        <p>task1</p>
        <Increment/>
        <p>task2</p>
        <Calculator/>
        <p>task3</p>
        <SignupForm/>
      </div>
    );
  }

  export default App;
