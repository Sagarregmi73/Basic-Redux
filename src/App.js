
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {Increment,Decrement,SignedIn} from './action'
function App() {
  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        
          Learn React
          <h1>Counter : {counter}</h1>
          <button onClick={()=>dispatch(Increment())}>+</button>
          <button onClick={()=>dispatch(Decrement())}>-</button>
          <button onClick={()=>dispatch(SignedIn())}>{isLogged ? "Logout" :"login"}</button>
         {isLogged ? 'You are logged' : 'sorry! you are not logged, access denied!'}
      </header>
    </div>
  );
}

export default App;
