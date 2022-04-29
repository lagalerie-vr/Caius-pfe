import React from 'react'

function EventParticipant({ event }) {

    return (
        <div>
            <ul role="list" className="divide-y divide-gray-200">
                {event.users.map((user) => (
                    <li key={user._id} className="py-4 flex">
                        <img className="h-10 w-10 rounded-full" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="" />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{user.nom}</p>
                            <p className="text-sm text-gray-500">{user.mail}</p>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default EventParticipant