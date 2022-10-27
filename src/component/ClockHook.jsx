import React, { useEffect,useState} from 'react';

function ClockHook(props){
    let [date,setDate]=useState(new Date());

    useEffect(()=>{
        let timerID= setInterval(()=> setDate(new Date()),1000);
        return ()=> clearInterval(timerID)
    },[])

    
        return (
            <div style={{display:'inline-block'}}>
                {date.toLocaleTimeString()}
                
            </div>
        );
        }
export default ClockHook;