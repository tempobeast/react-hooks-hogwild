import React from "react"

function Filter ({ setIsGreased, setNameSort, nameSort }){
    
function handleGreased(e) {
    setIsGreased(e.target.value)
}
    function handleNameSort(e) {
        setNameSort(!nameSort)
    }

    return (
        <div>
            <select onChange={handleGreased}>
                <option value="All">All</option>
                <option value={false}>Show the dry 'uns</option>
                <option value={true}>Show me the slippery boys</option>
            </select>
            <button onClick={handleNameSort}>{nameSort ? "Random" : "Sort by Name"}</button>
            <button> Sort by weight</button>
        </div>
    )
}

export default Filter