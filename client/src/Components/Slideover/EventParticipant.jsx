import React from 'react'

export default function EventParticipant({ event }) {

    return (


        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            < div div >
                {event.users.map((user) => (

                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nom</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.nom}</dd>
                                <dt className="text-sm font-medium text-gray-500">Mail</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.mail}</dd>
                            </div>
                        </dl>
                    </div>

                ))}
            </div >
        </div>
    )
}
