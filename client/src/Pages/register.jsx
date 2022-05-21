import logo from '../Assets/logoSmall.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
import { isPass, isMobile, isNom } from '../functions/VerifData'

export default function Example() {

    const [data, setData] = useState({
        mail: "",
        nom: "",
        prenom: "",
        numero: "",
        password: "",
    })


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)


        if (!isNom(data.nom)) { setError("Verifier votre nom") }
        else {
            if (!isPass(data.password)) { setError("Votre mot de passe doit etre compose de 8 charactere et un caractère spécial") } else {
                if (!isMobile(data.numero)) { setError("Verifier votre numero") } else {
                    if (!isNom(data.prenom)) { setError("Verifier votre prénom") }
                    else {
                        try {
                            const { data: res } = await API.post("/users/register", data);
                            navigate("/");
                            console.log(res.message);
                        } catch (error) {
                            if (
                                error.response &&
                                error.response.status >= 400 &&
                                error.response.status <= 500
                            ) {
                                setError(error.response.data.message);
                            }
                        }
                    }
                }
            }
        }
    };

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">                             Cree un compte
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ou{' '}
                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Connectez-vous
                        </Link>
                    </p>
                </div>

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
                                        required
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
                    </div>

                    <div className='py-5'>
                        <div className="relative">
                            <div className="relative flex justify-center text-sm">

                                {error && <div className=" bg-blue-50 p-4">
                                    <div>
                                        <p className="text-sm text-blue-700">
                                            {error}
                                        </p>
                                    </div>
                                </div>}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
