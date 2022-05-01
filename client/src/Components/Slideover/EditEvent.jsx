import React, { useEffect, useState } from 'react'
import Modal from "../Modals/Modal"

import API from '../../api/api';


function EditEvent({ event }) {
    const [data, setData] = useState({
        nom: "",
        dateEvent: "",
        type: "",
        cat: "",
        adr: "",
        prix: "",
        description: "",

    })

    const [confrimed, setconfrimed] = useState(false);

    useEffect(() => {

        setData({
            nom: event.nom,
            dateEvent: event.dateEvent,
            type: event.type,
            cat: event.description,
            adr: event.adr,
            prix: event.prix,
            description: event.description,
        })
    }, [event])



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await API.put(`/Events/${event._id}`, data);
            console.log(res.message);
            setconfrimed(true);
        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    return (
        <div>
            <form className="space-y-6" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Nom                                </label>
                    <div className="mt-1">
                        <input
                            id="nom"
                            name="nom"
                            type="text"
                            required
                            value={data.nom}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>


                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={data.type}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option></option>
                        <option>Formation</option>
                        <option>Event</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Catégorie                              </label>
                    <div className="mt-1">
                        <input
                            id="cat"
                            name="cat"
                            type="cat"
                            required
                            value={data.cat}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <div className="mt-1">
                        <input
                            id="adr"
                            name="adr"
                            type="adress"
                            required
                            value={data.adr}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <div className="mt-1">
                        <textarea
                            id="description"
                            name="description"
                            type="description"
                            required
                            value={data.description}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Prix
                    </label>
                    <div className="mt-1">
                        <input
                            id="prix"
                            name="prix"
                            type="text"
                            required
                            value={data.prix}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <div className="mt-1">

                        <input
                            type="date"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="dateEvent"
                            name="dateEvent"
                            required
                            value={data.dateEvent}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Modifier l'Event
                    </button>
                </div>
            </form>
            <div className='py-5'>
                <div className="relative">
                    <div className="relative flex justify-center text-sm">
                        {confrimed &&
                            <Modal
                                open={confrimed}
                                setOpen={setconfrimed} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEvent