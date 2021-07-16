import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {counterAction} from'../store/index';


const Counter = () => {
  const dispatch =useDispatch();
 const counter = useSelector(state=> state.counter.counter)  
 const show =useSelector(state=> state.counter.setToggle)

 const incrementhandler= () => {
   dispatch(counterAction.increment());
 }
  const decrementHandler = () =>{
    dispatch(counterAction.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button  onClick={incrementhandler} >increment</button>
        <button  onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
