import React, { useCallback, useState } from 'react'
import ChildUpdater from '../components/child-updater';

function ParentComponent(){
    const[redCount, setRedCount] = useState(0);
    const[blueCount, setBlueCount] = useState(0);

    function resetCounts(){
        setRedCount(0);
        setBlueCount(0);
    }

    function incrementRed(){
        setRedCount(redCount+1);
    }

    function incrementBlue(){
        setBlueCount(blueCount+1);
    }

    function decrementRed(){
        setRedCount(redCount-1);
    }

    function decrementBlue(){
        setBlueCount(blueCount-1);
    }

    //fixing callbacks
    //problem with passing only the incrementRed function is a new copy of the function is passed. function created by us does not retain an id unlike the function returned by useState hoook

    const incRed = useCallback(incrementRed, [redCount]);
    const decRed = useCallback(decrementRed, [redCount]);

    const incBlue = useCallback(incrementBlue, [blueCount]);
    const decBlue = useCallback(decrementBlue, [blueCount]);


    return(
        <div className="parent-comp">
            <main>
                <div className="red-counter">Red Counter: {redCount}</div>
                <div className="blue-counter">Blue Counter: {blueCount}</div>

                <br/>
                <button onClick={resetCounts}>Reset Counters</button>
                <br/>

                <ChildUpdater name="red" increment={incRed} decrement={decRed}/>
                <ChildUpdater name="blue" increment={incBlue} decrement={decBlue}/>
            </main>
        </div>

    )
}

export default ParentComponent