
import{createSlice, configureStore} from'@reduxjs/toolkit';




const  initialCounterState={counter :0,setToggle : true}

//redux using the  reduxjs toolkit
const counterSlice= createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        toggle(state){
            state.setToggle = !state.setToggle
        }
    }
})



const initialAuthState ={isAuthenticated:false};

const authSlice= createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})





//normal redux reducer function 
// const counterReducer = (state=initialState, action) =>{
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter+1,
//             setToggle:state.setToggle
//         };
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter :state.counter -1,
//             setToggle :state.setToggle
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             counter :state.counter,
//             setToggle :!state.setToggle
//         }
//     }
//     return state;
  
// }
const store= configureStore({
    reducer: {
        counter:counterSlice.reducer, auth:authSlice.reducer}
});


export const counterAction= counterSlice.actions; 
export const authAction =authSlice.actions;
export default store;