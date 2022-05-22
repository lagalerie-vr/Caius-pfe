import { useState } from 'react'
import Slideover from '../../Layouts/Slideover'
import AddEvent from '../../Components/Slideover/AddEvent'
import useGet from '../../data/Functions/useGet'
import API from '../../api/api'
import Modal from '../Modals/Modal'
import EventParticipant from '../../Components/Slideover/EventParticipant'
import EditEvent from '../../Components/Slideover/EditEvent'


function Calender() {


    const eventDelete = (id, e) => {
        e.preventDefault();
        try {
            API.delete(`/events/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const events = useGet("/events")

    const [open, setOpen] = useState(false)
    const [list, setList] = useState(false)
    const [Modifier, setModifier] = useState(false)
    const [confrimed, setconfrimed] = useState(false);
    const [selected, setSelected] = useState(null)


    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            <header className="flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
                <h1 className="text-lg font-semibold text-gray-900">
                </h1>
                <div className="flex items-center">
                    <div className="hidden md:ml-4 md:flex md:items-center">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}

                            className="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Ajouter un evenement
                        </button>


                    </div>
                </div>
                <Slideover
                    open={open}
                    setOpen={setOpen}
                    title="Ajouter un event"
                    children={<AddEvent />} />


            </header>
            {events.length > 0 ?

                <div className="flex flex-col">
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
                                                <span className="sr-only">Participant</span>
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
                                            <tr key={event.email}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-700">{event.nom}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.dateEvent}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.type}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.cat}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.adr}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-700">{event.prix}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a
                                                        onClick={(e) => { setList(true); setSelected(event) }}
                                                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Participant
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a
                                                        onClick={(e) => { setModifier(true); setSelected(event) }}
                                                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Modifier
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={(e) => eventDelete(event._id, e)}
                                                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                    >
                                                        Supprimer
                                                    </button>


                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className=" bg-blue-50 p-4">
                    <div>
                        <p className="text-sm text-blue-700">
                            Il n'y a aucun événement prévu
                        </p>
                    </div>
                </div>}


            <Slideover
                open={list}
                setOpen={setList}
                title="Liste des participant"
                children={<EventParticipant
                    event={selected} />} />

            <Slideover
                open={Modifier}
                setOpen={setModifier}
                title="Modifier l'event"
                children={<EditEvent
                    event={selected} />} />


            {confrimed &&
                <Modal
                    open={confrimed}
                    setOpen={setconfrimed} />}

        </div>)
}

export default Calender