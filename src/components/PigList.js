import React from "react";
import PigTile from "./PigTile";

function PigList({ hogs, isGreased, nameSort }) {
   
   console.log(isGreased)
   console.log(hogs[0].greased)

    const greasedFilter = 
    isGreased === "All" ? hogs : hogs.filter(hog => hog.greased.toString() === isGreased.toString())

    const sortByName = greasedFilter.sort(function (a, b) {
        if(a.name < b.name) {return -1;}
        if(a.name > b.name) {return 1;}
        return 0;
    })

    const hogFilter = 
    nameSort ? sortByName : greasedFilter

    return (
        <div className="ui grid container">
            {greasedFilter.map((hog) => {
                return <PigTile key={hog.name} hog={hog}/>
            })}
        </div>
    )
}

export default PigList