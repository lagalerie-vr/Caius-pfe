import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import API from '../../api/api';
import { useUser } from '../../contexts/AuthProvider';
import Modal from '../Modals/Modal';


function Demande() {
    const user = useUser()
    const [creation, setCreation] = useState([])
    const [domiciliation, setDomiciliation] = useState([])

    useEffect(() => {
        async function fetchData() {
            if (user) {
                setCreation((await API.get(`/creations/user/${user._id}`)).data)
                setDomiciliation((await API.get(`/domiciliation/user/${user._id}`)).data)
            }
        }
        fetchData()
    }, [user])

    const [confrimed, setconfrimed] = useState(false);


    const creationDelete = (id, e) => {
        e.preventDefault();
        try {
            API.delete(`/creations/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const domicilationDelete = (id, e) => {
        e.preventDefault();
        try {
            API.delete(`/domiciliation/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <>
            <div>

                <header className="py-10">
                    <div className="md:flex md:items-center md:justify-between">
                        <h1 className="text-3xl font-bold text-indigo-900">Demande de Creation</h1>

                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                        </div>
                        <div className="mt-4 flex md:mt-0 md:ml-4">
                            <Link
                                to="/CreationForm">
                                <button
                                    type="button"
                                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Ajouter une Demande de Creation
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='py-3'></div>
                </header >

                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {creation.map((demande, key) => (
                        <div key={key} className="max-w-sm bg-white rounded-lg border border-indigo-700 shadow-md bg-indigo-800">
                            <div className="p-5">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{demande.nom}</h5>
                                </div>
                                <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3'>{demande.state}</p>

                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Domaine : {demande.domaine}</p>
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">{demande.recherche}</p>


                                {demande.state === "Acceptée" ? <></> :
                                    <div>
                                        <hr className="mb-3" />
                                        <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-red-700 bg-white rounded-lg hover:bg-red-800 hover:text-white"
                                            onClick={(e) => creationDelete(demande._id, e)}
                                        >
                                            Annuler la demande
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                    }

                </ul >

                <header className="py-10">
                    <div className="md:flex md:items-center md:justify-between">
                        <h1 className="text-3xl font-bold text-indigo-900">Demande de Domiciliation</h1>

                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                        </div>
                        <div className="mt-4 flex md:mt-0 md:ml-4">
                            <Link
                                to="/Domicilitation">
                                <button
                                    type="button"
                                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Ajouter une Demande de Domiciliation
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='py-3'></div>
                </header >

                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {domiciliation.map((demande, key) => (
                        <div key={key} className="max-w-sm bg-white rounded-lg border border-indigo-700 shadow-md bg-indigo-800">
                            <div className="p-5">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{demande.nom}</h5>
                                </div>
                                <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3'>En cours de traitement</p>
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Forme : {demande.forme}</p>
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Abonnement : {demande.abonnement}</p>
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Adresse : {demande.adresse}</p>
                                {demande.state === "Acceptée" ? <></> :
                                    <div>
                                        <hr className="mb-3" />
                                        <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-red-700 bg-white rounded-lg hover:bg-red-800 hover:text-white"
                                            onClick={(e) => domicilationDelete(demande._id, e)}
                                        >
                                            Annuler la demande
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                    }
                </ul >
                {
                    confrimed &&
                    <Modal
                        open={confrimed}
                        setOpen={setconfrimed} />
                }
            </div>
        </>

    )
}

export default Demande