import React, { Fragment, useState } from "react"

import "./display.css"


const Display = () => {
    const [issLocation, setIssLocation] = useState(0)
    const [toggle, setToggle] = useState(false)

    const getIssLocation = () => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json())
            .then(result => setIssLocation(result.iss_position))
            .catch(err => console.log(err))

        setToggle(true)
    }

    return (
        <Fragment>
            <div className="location-container">
                {
                    toggle
                        ? (
                            <div className="location-border">
                                <span>longitude: {issLocation.longitude}</span>
                                <span>latitude: {issLocation.latitude}</span>
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