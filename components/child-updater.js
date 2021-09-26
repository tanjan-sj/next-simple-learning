import React, {useState} from 'react'

function ChildUpdater({name, increment, decrement}){
    const[count, setCount] = useState(0);

    return(
        <div className="child-comp">
            Local Counter: {count}

            <br/>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <br/>

            <h1> {name} Parent updater</h1>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>

        </div>
    )
}

export default React.memo(ChildUpdater)