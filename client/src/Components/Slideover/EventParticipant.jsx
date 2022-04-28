import React, { useEffect } from 'react'
import useGet from '../../data/Functions/useGet'

function EventParticipant({ event }) {

    useEffect(() => {
        console.log(event.users)
    }, [event])
    return (
        <div>


        </div>
    )
}

export default EventParticipant