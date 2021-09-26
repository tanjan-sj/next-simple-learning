import React, { useState } from 'react'


function ParentCounter(){

    const [count, setCount] = useState(0);

    return (
        <>
            <div className = "parent-comp">
                <h1>nested counter with 2 children</h1>

                <main>
                    Counter: {count}
                    <br/>
                    <button onClick={() => setCount(count+1)}> + </button>
                    <button onClick={() => setCount(count-1)}> - </button>
                    <br/>
                    
                    <ChildA parentCount={count}/>
                    <br/>
                    <ChildB updateParentCount={setCount}/>

                </main>
            </div>
        </>
    )
}

function ChildA({parentCount}){
    const[count, setCount] = useState(0);

    return (
        <div className="child-comp">
            <h1> first child </h1>
            <main>
                ParentCounter: {parentCount}
                <br/>
                SelfCounter: {count}
                <br/>
                <button onClick={() => setCount(count+1)}> + </button>
                <button onClick={() => setCount(count-1)}> - </button>
            </main>
        </div>
    )
}

function ChildB({updateParentCount}){
    const[count, setCount] = useState(0);
    const[textVal, setTextVal] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        updateParentCount(textVal);
    }
    
    return(
        <div className = "child-comp">
            <main>
                <h2> second child </h2>
                <br/>
                SelfCounter: {count}
                <br/>
                <button onClick={() => setCount(count + 1)}> + </button>
                <button onClick={() => setCount(count - 1)}> - </button>
                <form>
                    <label htmlFor="id1">set parent counter: </label>
                    <input id="id1" type="text"
                        value={textVal}
                        onChange={(e) =>
                            setTextVal(e.target.value)}/>
                    <input type="submit" value="Set" onClick={handleSubmit}/>
                </form> 
            </main>
        </div>
    )
}

export default ParentCounter