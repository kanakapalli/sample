import { combineReducers, createStore } from 'redux';

//action called by component
export function incrementCounterAction() {
    return {
        type: 'INCREMENT'
    }
}
export function decrementCounterAction() {
    return {
        type: 'DECREMENT'
    }
}
export function addCommentAction(newComment) {
    return {
        type: 'ADD_COMMENT',
        payload:newComment
    }
}
//Reducer which accepts state
let counterReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT': return state=state+1;
        case 'DECREMENT': return state=state-1;
        default: return state
    }
}
let commentReducer=(state=['Good Cartoon Series'],action)=>{
    switch(action.type){
        case 'ADD_COMMENT': return[...state,action.payload]
        default: return state
    }
}
//creating root object to combine all reducer
let rootReducer = combineReducers({ counter: counterReducer, comments:commentReducer});

//creating store and attaching reducer to store
export let store = createStore(rootReducer)