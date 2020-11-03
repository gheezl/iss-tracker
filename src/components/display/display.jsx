import React, { Fragment, useState } from "react"

import "./display.css"


const Display = () => {
    const [issLocation, setIssLocation] = useState(0)
    const [toggle, setToggle] = useState(false)

    const getIssLocation = () => {
        fetch("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => response.json())
            .then(result => setIssLocation(result))

        setToggle(true)
    }

    return (
        <Fragment>
            <div className="location-container">
                {
                    toggle
                        ? (
                            <div className="location-border">
                                <span>longitude: {Math.ceil(issLocation.longitude)}</span>
                                <span>latitude: {Math.ceil(issLocation.latitude)}</span>
                            </div>
                        )
                        : (
                            <div className="button-border">
                                <button className="button" onClick={() => setInterval(getIssLocation, 1000)} >
                                    Start Tracking
                                </button>
                            </div>
                        )
                }
            </div>
        </Fragment>
    )
}

export default Display;