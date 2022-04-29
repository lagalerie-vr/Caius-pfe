import React, { useState, useReducer } from 'react'
import API from '../../api/api';
import Modal from '../Modals/Modal';

function AddUser() {

    const [error, setError] = useState("");
    const [confrimed, setconfrimed] = useState(false);
    const [data, setData] = useState({
        mail: "",
        nom: "",
        prenom: "",
        numero: "",
        role: "",
        password: "",
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
                        Prenom                                </label>
                    <div className="mt-1">
                        <input
                            id="prenom"
                            name="prenom"
                            type="text"
                            autoComplete="prenom"
                            required
                            value={data.prenom}
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

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={data.role}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>default</option>
                        <option>Client</option>
                        <option>Expert</option>
                        <option>Admin</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={data.password}
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
                        Créer un compte
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

export default AddUser