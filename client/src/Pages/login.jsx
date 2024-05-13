import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/logoSmall.png'
import { useState } from "react";
import API from '../api/api';




export default function Example() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        mail: "",
        password: "",
    })

    const [error, setError] = useState("");


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await API.post("/users/login", data);
            localStorage.setItem("token", res.data);
            console.log(localStorage.getItem("token"))
            navigate('/')
            window.location.reload();
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




    return (

        <>

            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={logo}
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connectez-vous</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ou{' '}
                        <Link to="/register" className="font-medium text-red-600 hover:text-red-500">
                            Cree un compte
                        </Link>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
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
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                                        required
                                        value={data.password}
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
                                    Se connecter
                                </button>
                            </div>
                        </form>

                    </div>

                    <div className='py-5'>
                        <div className="relative">
                            <div className="relative flex justify-center text-sm">
                                {error && <span className="px-2 bg-white text-red-500" >impossible de vérifier vos informations d'identification</span>}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
