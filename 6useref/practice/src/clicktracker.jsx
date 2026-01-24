import React from 'react'
import { useRef } from 'react'
import './clicktracker.css'

const clicktracker = () => {
    //1
    const countRef = useRef(0);

    //3
    const handleSecretClick = () => {
        countRef.current = countRef.current + 1;
        console.log("total clicks so far:",countRef.current);
        //the screen does not re render on click but the value is updated in the console
    }


    return (
        <div id='body'>
            clicktracker

            {/* 2 */}
            <button onClick={handleSecretClick}>click me(secretly)</button>
            <button onClick={()=> alert(`Total:${countRef.current}`)}
            >show total clicks</button>
        </div>
    )
}

export default clicktracker