import { PaperClipIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import API from '../../api/api';
import Modal from '../Modals/Modal';

export default function MessageDetail({ selected }) {

    const [confrimed, setconfrimed] = useState(false);
    const [data, setData] = useState({
        reponse: selected.reponse,
    })

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        console.log(data)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.put(`/expertMessage/${selected._id}`, data);
            setconfrimed(true);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Nom</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selected.nom}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Mail</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selected.mail}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Numéro de telephone</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selected.number}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500"> Demande</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selected.demande}</dd>
                    </div>
                </dl>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500"> Votre reponse</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <textarea
                            id="reponse"
                            name="reponse"
                            type="text"
                            required
                            placeholder='votre reponse'
                            value={data.reponse}
                            onChange={handleChange}
                            className="appearance-none bloc k w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="6"
                        />
                    </dd>
                </div>


                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {selected.reponse === "" ? " Envoyer la reponse" : "Modifier la reponse"}

                    </button>
                </div>

            </form >

            {confrimed &&
                <Modal
                    open={confrimed}
                    setOpen={setconfrimed} />
            }

        </div >
    )
}
