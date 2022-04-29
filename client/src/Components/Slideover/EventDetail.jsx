import React, { useEffect, useState } from 'react'
import API from '../../api/api'
import UserID from '../../data/Functions/UserID'

export default function EventDetail({ reserved, setReserved, event }) {
    const userId = UserID(localStorage.getItem("token"))

    function resever(id) {
        API.post(`events/User/${id}`, { user: userId })
    }
    useEffect(() => {
        event.users.forEach(element => {
            if (element._id === userId) {
                setReserved(true)
            }
        })
    }, [event])
    return (
        <div>{event.description}

            {reserved ? (<a
                onClick={() => {
                    resever(event._id)
                    setReserved(false)
                }}
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Annuler la reservation
            </a>)

                :

                (<a
                    onClick={() => {
                        resever(event._id)
                        setReserved(true)
                    }}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Reserver
                </a>)}

        </div>
    )
}
