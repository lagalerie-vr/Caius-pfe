import React, { useState } from 'react'
import API from '../../api/api';
import Modal from '../Modals/Modal';

function MessageExpert() {
    const [data, setData] = useState({
        nom: "",
        mail: "",
        numero: "",
        demande: "",
        file: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { data: res } = await API.post("/users/register", data);
            console.log(res.message);
            setconfrimed(true);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    const [error, setError] = useState("");
    const [confrimed, setconfrimed] = useState(false);



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
                            autoComplete="name"
                            required
                            value={data.nom}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Address mail
                    </label>
                    <div className="mt-1">
                        <input
                            id="mail"
                            name="mail"
                            type="email"
                            autoComplete="email"
                            required
                            value={data.mail}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Numéro
                    </label>
                    <div className="mt-1">
                        <input
                            id="numero"
                            name="numero"
                            type="numero"
                            autoComplete="phone"
                            required
                            value={data.numero}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Votre demande
                    </label>
                    <div className="mt-1">
                        <textarea
                            for="large-input"
                            id="demande"
                            name="demande"
                            type="text"
                            required
                            value={data.demande}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Partager un fichier </span>
                                <input id="file" name="file" type="file" className="sr-only" />
                            </label>
                        </div>
                        <p className="text-xs text-gray-500">PDF, PNG, JPEG</p>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
            <div className='py-5'>
                <div className="relative">
                    <div className="relative flex justify-center text-sm">
                        {error && <span className="px-2 bg-white text-red-500" >{error}</span>}
                        {confrimed &&
                            <Modal
                                open={confrimed}
                                setOpen={setconfrimed} />}                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageExpert