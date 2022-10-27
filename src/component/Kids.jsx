import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import {incrementCounterAction,decrementCounterAction,addCommentAction} from '../redux/config';

function Kids(props) {
    let newComment=useRef();
    return (
        <div>
            <h1>Kids</h1>
            <img src="/assets/Kids.png" alt='Kids' height="400px" width="1200px"/>
            <br/>
            <button onClick={()=>props.increment()}>Like</button>{props.counter}
            <button onClick={()=>props.decrement()}>DisLike</button>{}
            <br/>
            <ul>
            {props.comments.map(comment=><li>{comment}</li>)}
            </ul>
            <input type="text" ref={newComment}/>
            <button onClick={()=>props.addComments(newComment.current.value)}>Add</button>
        </div>
    );
}
//helps for reading the staste of the store
let mapStateToProps=(state)=>{
    return {counter:state.counter,comments:state.comments}
}
//helps to trigger action to the store
let mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(incrementCounterAction()),
        decrement:()=>dispatch(decrementCounterAction()),
        addComments:(newComment)=>dispatch(addCommentAction(newComment))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Kids);