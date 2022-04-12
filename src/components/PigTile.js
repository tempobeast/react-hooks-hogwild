import React, { useState } from "react"

function PigTile ({ hog }) {

    const [showDetails, setShowDetails] = useState("")

    function handlePigClick(e) {
        setShowDetails(!showDetails)
    }

    const isGreased = hog.greased ? "You betcha" : "'fraid not"

    const displayDetails = () => {
        return (
            <ul>
                <li>Specialty: {hog.specialty}</li>
                <li>Weight: {hog.weight}</li>
                <li>Greased: {isGreased}</li>
                <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
            </ul>
        )
    }

    return (
        <div onClick={handlePigClick} className="pigTile pigTileSize">
            <img src={hog.image} alt={hog.name}></img>
            <h3>{hog.name}</h3>
            {showDetails ? displayDetails() : null}
        </div>
    )
}

export default PigTile