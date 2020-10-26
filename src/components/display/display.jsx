import React, { Fragment, useState } from "react"

import "./display.css"


const Display = () => {
    const [issLocation, setissLocation] = useState(null)

    const getIssLocation = () => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json())
            .then(result => setissLocation(result.iss_position.longitude))
    }


    getIssLocation()

    return (
        <Fragment>
            <div className="location-border">
                <span>{issLocation}</span>
            </div>
        </Fragment>
    )
}

export default Display;