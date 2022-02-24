// const initialState = " ";
const initialState = 10
  
const addtocart = (state = initialState, action) => {

    switch(action.type){
        case 'ADD': return state + 1;
        
        // case 'DECREMENT': 
        //     if(state===0){ return state; }
        //         return state - 1;

        // case 'RESET':
        //     return initialState;
        
        default: return state;
        
    }
}

export default addtocart;