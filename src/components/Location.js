import React from 'react'
import { useParams } from "react-router"

export default function Location(props) {
    const {loc} = useParams()

    return (
        <>
            <h1>Location: {loc}</h1>
        </>
    )
}

