import { useEffect, useState } from 'react';
import { useUser } from '../../contexts/AuthProvider';
import API from '../../api/api';

export default function Example() {

    const user = useUser()

    const [data, setData] = useState({
        mail: "",
        nom: "",
        prenom: "",
        numero: "",
        password: "",
    })


    useEffect(() => {
        setData({
            mail: user.mail,
            nom: user.nom,
            prenom: user.prenom,
            numero: user.numero,
            password: user.password
        })
    }, [user])




    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await API.put(`/users/user/${user._id}`, data);
            console.log(res.message);
            window.location.reload()
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                console.log(error.response.data.message);
            }
        }
    };



    const userDelete = () => {
        API.delete(`/Users/user/${user._id}`)
        localStorage.removeItem('token')
        window.location.reload()
    }


    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                        value={data.prenom}
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
                                        value={data.numero}
                                        onChange={handleChange}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
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
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                                Supprimer mon compte
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
