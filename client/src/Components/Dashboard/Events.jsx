import useGet from "../../data/Functions/useGet"
import API from "../../api/api"
import UserID from "../../data/Functions/UserID"
import { useEffect, useState } from "react"
import EventDetail from "../Slideover/EventDetail"
import Slideover from "../../Layouts/Slideover"


export default function Events() {

    const events = useGet("/events")
    return (
        <div>
            <div className="flex flex-col">
                {events.length > 0 ?

                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Nom
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Type
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Catégorie
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Adresse
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Prix
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">detail</span>
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Reserver</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {events.map((event) => (
                                            <Line
                                                event={event}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" bg-blue-50 p-4">
                        <div>
                            <p className="text-sm text-blue-700">
                                Il n'y a aucun événement prévu
                            </p>
                        </div>
                    </div>
                }
            </div></div>
    )
}

function Line({ event }) {
    const userId = UserID(localStorage.getItem("token"))

    function resever(id) {
        API.post(`events/User/${id}`, { user: userId })
    }

    const [selected, setSelected] = useState("")
    const [open, setOpen] = useState(false)


    const [reserved, setReserved] = useState(false)

    useEffect(() => {
        event.users.forEach(element => {
            if (element._id === userId) {
                setReserved(true)
            }
        })
    }, [event.users])

    return (
        <>
            <tr key={event.email}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-700">{event.nom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.dateEvent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.cat}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.adr}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-700">{event.prix}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                        onClick={(e) => { setOpen(true); setSelected(event) }}
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Plus de détail
                    </button>
                </td>

            </tr>
            <Slideover
                open={open}
                setOpen={setOpen}
                title="Description de l'event"
                children={<EventDetail
                    event={selected}
                    reserved={reserved}
                    setReserved={setReserved} />} />
        </>
    )
}