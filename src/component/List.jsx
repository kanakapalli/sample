import React from 'react';
import './List.css'

function List(props) {
    let arr=['Thriller','Draw','Crime','Action','Comedy','Horror','Historical','Mystery','Sports']
    let tiles=arr.map((element)=><p>{element}</p>)
    return (
        <div style={{display:'flex',marginTop:'3%'}}>
            <div style={{margin:'3%'}}>
                <h4>Your favorite genre all in one place</h4>
                <p style={{width:'440px',color:'white'}}>With Lights out, find shows and movies from your favorite genere in one place</p>
            </div>
            <div className='secondDiv'>
                {tiles}
            </div>
        </div>
    );
}

export default List;