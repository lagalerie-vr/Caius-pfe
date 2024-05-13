import { useEffect, useState } from 'react';
import API from '../../api/api';
import Modal from '../Modals/Modal';

export default function Example({ user }) {

    const [data, setData] = useState({
        mail: "",
        nom: "",
        prenom: "",
        numero: "",
        role: "",
        password: "",
    })


    const [confrimed, setconfrimed] = useState(false);


    useEffect(() => {

        setData({
            mail: user.mail,
            nom: user.nom,
            prenom: user.prenom,
            numero: user.numero,
            password: user.password,
            role: user.role,
        })
    }, [user])

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await API.put(`/users/user/${user._id}`, data);
            console.log(res.message);
            setconfrimed(true);
        } catch (error) {
            console.log(error)
        }
    };

    const userDelete = () => {
        API.delete(`/Users/user/${user._id}`)
        setconfrimed(true);
    }


    return (
        <>
            <form className="space-y-6" onSubmit={handleSubmit} >
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
                            value={data.mail}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Nom                                </label>
                    <div className="mt-1">
                        <input
                            id="nom"
                            name="nom"
                            type="text"
                            autoComplete="name"
                            value={data.nom}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                            value={data.prenom}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                            value={data.numero}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                        <option value="default">User</option>
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
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Enregistré
                    </button>
                </div>

            </form>

            <div className='mt-5'>
                <button
                    onClick={userDelete}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Supprimer ce compte
                </button>
            </div>

            {confrimed &&
                <Modal
                    open={confrimed}
                    setOpen={setconfrimed} />}



        </>
    )
}
