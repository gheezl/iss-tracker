import React, { Fragment, useState } from "react"

import "./display.css"


const Display = () => {
    const [issLocation, setIssLocation] = useState(0)

    const getIssLocation = () => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json())
            .then(result => setIssLocation(result.iss_position))
    }


    return (
        <Fragment>
            <div className="button-border">
                <button className="button" onClick={() => setInterval(getIssLocation, 1000)} >
                    Click to display location
                </button>
            </div>
            <div className="location-container">

                <div className="location-border">
                    <span>longitude: {issLocation.longitude}</span>
                    <span>latitude: {issLocation.latitude}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Display;