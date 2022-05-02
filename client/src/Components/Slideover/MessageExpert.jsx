import React, { useEffect, useState } from 'react'
import API from '../../api/api';
import Modal from '../Modals/Modal';
import Progress from '../Progress';
import { useUser } from '../../contexts/AuthProvider'


function MessageExpert({ selected }) {
    const expert = selected

    const user = useUser()

    const [data, setData] = useState({
        nom: "",
        mail: "",
        number: "",
        demande: "",
        file: "",
    })


    useEffect(() => {

        setData({
            nom: "",
            mail: "",
            number: "",
            demande: "",
            file: "",
            user: user._id,
            expert: expert._id
        })

    }, [user])




    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { data: res } = await API.post("/expertMessage", data);
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
        console.log(data)
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
                            id="number"
                            name="number"
                            type="number"
                            autoComplete="phone"
                            required
                            value={data.number}
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