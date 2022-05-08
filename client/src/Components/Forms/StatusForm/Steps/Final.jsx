import { useStepperContext } from "../../../../contexts/StepperContext";
import { Link } from 'react-router-dom'
import API from "../../../../api/api";
import { useState } from "react";


export default function Final() {

    const [error, setError] = useState(false);
    const [confrimed, setconfrimed] = useState(false);
    const { userData, setUserData } = useStepperContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { userData: res } = await API.post("/statut", userData);
            console.log(userData);
            setconfrimed(true);
        } catch (error) {
            setError(true);
            console.log(userData);

        }
    };

    return (

        <div>
            <main className="flex-1 flex overflow-hidden">
                {/* Primary column */}
                <section
                    aria-labelledby="primary-heading"
                    className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
                >
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="border border-gray-200">
                            <dl>


                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Nom société</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.nomSociete}</dd>
                                </div>

                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Siege social</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.siege}</dd>
                                </div>

                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Capital Social</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.capital}</dd>
                                </div>

                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">N° actions</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.actions}</dd>
                                </div>


                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Valeur/Action</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.partie}
                                    </dd>
                                </div>

                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Denomination de la société</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.denomination}</dd>
                                </div>

                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Les emprunts importants </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.plafond}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Les garanties des dettes </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.garanties}</dd>
                                </div>
                            </dl>
                        </div>
                    </div >
                </section>

                {/* Secondary column (hidden on smaller screens) */}
                <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                    <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white overflow-y-auto">
                        <div className="container md:mt-10">
                            <div className="flex flex-col items-center">
                                <div className="wrapper">
                                    <svg
                                        className="checkmark"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 52 52"
                                    >
                                        <circle
                                            className="checkmark__circle"
                                            cx="26"
                                            cy="26"
                                            r="25"
                                            fill="none"
                                        />
                                        <path
                                            className="checkmark__check"
                                            fill="none"
                                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                        />
                                    </svg>
                                </div>


                                <div className='py-5'>
                                    <div className="relative">
                                        <div className="relative flex justify-center text-sm">
                                            {error &&
                                                <div className="container md:mt-10">
                                                    <div className="flex flex-col items-center">
                                                        <div className="wrapper">
                                                            <svg
                                                                className="checkmark"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 52 52"
                                                            >
                                                                <circle
                                                                    className="checkmark__circle"
                                                                    cx="26"
                                                                    cy="26"
                                                                    r="25"
                                                                    fill="none"
                                                                />
                                                                <path
                                                                    className="checkmark__check"
                                                                    fill="none"
                                                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                                                />
                                                            </svg>
                                                        </div>

                                                        <div className="mt-3 text-xl font-semibold uppercase text-red-700">
                                                            😥 !
                                                        </div>
                                                        <div className="text-lg font-semibold text-red-500">
                                                            votre demande n'a pas pu être envoyé, réessayer plus tard</div>
                                                        <Link className="mt-10"
                                                            to="/">
                                                            <button className="h-10 px-5 text-red-700 transition-colors duration-150 border border-red-300 rounded-lg focus:shadow-outline hover:bg-red-700 hover:text-red-100">
                                                                Acceuil
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            }

                                            {confrimed &&

                                                <div className="container md:mt-10">
                                                    <div className="flex flex-col items-center">
                                                        <div className="wrapper">
                                                            <svg
                                                                className="checkmark"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 52 52"
                                                            >
                                                                <circle
                                                                    className="checkmark__circle"
                                                                    cx="26"
                                                                    cy="26"
                                                                    r="25"
                                                                    fill="none"
                                                                />
                                                                <path
                                                                    className="checkmark__check"
                                                                    fill="none"
                                                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                                                />
                                                            </svg>
                                                        </div>

                                                        <div className="mt-3 text-xl font-semibold uppercase text-indigo-700">
                                                            Felicitations !
                                                        </div>
                                                        <div className="text-lg font-semibold text-gray-500">
                                                            votre demande a été envoyée avec succès
                                                        </div>
                                                        <Link className="mt-10"
                                                            to="/">
                                                            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-indigo-700 hover:text-indigo-100">
                                                                Acceuil
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>


                                {(!confrimed && !error) && <div>
                                    <div className="container md:mt-10">
                                        <div className="flex flex-col items-center">
                                            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-indigo-700 hover:text-indigo-100"

                                                onClick={handleSubmit}>
                                                Confirmer ma demande
                                            </button>

                                            <Link className="mt-10"
                                                to="/">
                                                <button className="h-10 px-5 text-red-700 transition-colors duration-150 border border-red-300 rounded-lg focus:shadow-outline hover:bg-red-700 hover:text-red-100">
                                                    Annuler ma demande
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>}


                            </div>
                        </div >
                    </div>
                </aside>
            </main>

        </div>

    );
}