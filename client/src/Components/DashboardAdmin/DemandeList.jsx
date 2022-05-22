import React, { useEffect, useState } from 'react'
import API from '../../api/api';
import useGet from '../../data/Functions/useGet'
import Modal from '../Modals/Modal';
import DomiDetail from '../Slideover/DomiDetail'
import CreationDetail from '../Slideover/CreationDetail'
import Slideover from '../../Layouts/Slideover'

function Demande() {

    const [confrimed, setconfrimed] = useState(false);
    const [selected, setSelected] = useState("")
    const [detailDomi, setDetailDomi] = useState(false)
    const [detailCreation, setDetailCreation] = useState(false)


    const [demandes, setDemandes] = useState("Tous les Demandes")
    const [demandeCreation, setDemandeCreation] = useState([])
    const [demandeDomiciliation, setDemandeDomiciliation] = useState([])

    useEffect(() => {
        async function demandesPick() {
            if (demandes === "Tous les Demandes") {
                setDemandeCreation((await API.get('/creations')).data)
                setDemandeDomiciliation((await API.get('/domiciliation')).data)
            } else {
                setDemandeCreation((await API.get(`/creations/state/${demandes}`)).data)
                setDemandeDomiciliation((await API.get(`/Domiciliation/state/${demandes}`)).data)
            }
        }
        demandesPick()
    }, [demandes])


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

    const domicilationAccept = (id, e) => {
        e.preventDefault();
        try {
            API.put(`/domiciliation/update/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const creationAccept = (id, e) => {
        e.preventDefault();
        try {
            API.put(`/creations/update/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = ({ currentTarget: input }) => {
        setDemandes(input.value)
    }
    return (
        <div>
            <div className="md:flex md:items-center md:justify-between">

                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <div className="col-span-6 sm:col-span-3">
                        <select
                            id="role"
                            name="role"
                            onChange={handleChange}
                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option>Tous les Demandes</option>
                            <option>En Cours de traitement</option>
                            <option>Passer a l'Expert</option>
                            <option>Acceptée</option>
                            <option>Refuser</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='py-3'></div>

            {demandeCreation.length > 0 ? <div>
                <header className="py-5">
                    <h1 className="text-3xl font-bold text-indigo-900">Demande de Creation</h1>

                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                    </div>
                    <div className='py-3'></div>
                </header >

                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {demandeCreation.map((demande) => (
                        <div className="max-w-sm bg-white rounded-lg border border-indigo-700 shadow-md bg-indigo-800">
                            <div className="p-5">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{demande.nom}</h5>
                                </div>
                                {demande.state === "Acceptée" ?
                                    <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3'>{demande.state}</p>
                                    : <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-3'>{demande.state}</p>
                                }
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Domaine : {demande.domaine}</p>
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">{demande.recherche}</p>
                                <hr className="mb-3" />

                                <a className="inline-flex items-center mr-3 py-2 px-3 text-sm font-medium text-center text-red-700 bg-white rounded-lg hover:bg-red-800 hover:text-white"
                                    onClick={(e) => creationDelete(demande._id, e)}
                                >
                                    Supprimer
                                </a>

                                {(demande.state === "Passer a l'Expert" || demande.state === "Acceptée") ? <></> :
                                    <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-green-700 bg-white rounded-lg hover:bg-green-800 hover:text-white"
                                        onClick={(e) => creationAccept(demande._id, e)}
                                    >
                                        Passer la demande a un expert
                                    </a>
                                }

                                <a className="mt-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-indigo-700 bg-white rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
                                    onClick={(e) => { setDetailCreation(true); setSelected(demande) }}
                                >
                                    Plus de détails
                                </a>

                            </div>
                        </div>
                    ))
                    }

                </ul >
            </div> : <>
                <div className=" bg-blue-50 p-4 mb-2">
                    <div>
                        <p className="text-sm text-blue-700">
                            Aucun demande de création a été passé                        </p>
                    </div>
                </div>
            </>}

            {demandeDomiciliation.length > 0 ? <div>
                <header className="py-7">

                    <div className="md:flex md:items-center md:justify-between">
                        <h1 className="text-3xl font-bold text-indigo-900">Demande de Domiciliation</h1>
                    </div>
                </header >
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {demandeDomiciliation.map((demande) => (
                        <div className="max-w-sm bg-white rounded-lg border border-indigo-700 shadow-md bg-indigo-800">
                            <div className="p-5">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{demande.nom}</h5>
                                </div>
                                {demande.state === "Acceptée" ?
                                    <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3'>{demande.state}</p>
                                    : <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-3'>{demande.state}</p>
                                }
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Forme : {demande.forme}</p>
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Abonnement : {demande.abonnement}</p>
                                <hr className="mb-3" />
                                <p className="mb-3 font-normal text-white">Adresse : {demande.adresse}</p>
                                <hr className="mb-3" />
                                <a className="inline-flex items-center mr-3 py-2 px-3 text-sm font-medium text-center text-red-700 bg-white rounded-lg hover:bg-red-800 hover:text-white"
                                    onClick={(e) => domicilationDelete(demande._id, e)}
                                >
                                    Supprimer
                                </a>

                                {(demande.state === "Passer a l'Expert" || demande.state === "Acceptée") ? <></> :
                                    <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-green-700 bg-white rounded-lg hover:bg-green-800 hover:text-white"
                                        onClick={(e) => domicilationAccept(demande._id, e)}
                                    >
                                        Passer la demande a un expert
                                    </a>
                                }

                                <a className="mt-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-indigo-700 bg-white rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
                                    onClick={(e) => { setDetailDomi(true); setSelected(demande) }}
                                >
                                    Plus de détails
                                </a>
                            </div>
                        </div>
                    ))
                    }
                </ul >
            </div> : <>
                <div className=" bg-blue-50 p-4 mt-5">
                    <div>
                        <p className="text-sm text-blue-700">
                            Aucun demande de domiciliation a été passé
                        </p>
                    </div>
                </div>
            </>}

            {
                confrimed &&
                <Modal
                    open={confrimed}
                    setOpen={setconfrimed} />
            }

            <Slideover
                open={detailCreation}
                setOpen={setDetailCreation}
                title="Plus de détail"
                children={<CreationDetail
                    selected={selected} />} />


            <Slideover
                open={detailDomi}
                setOpen={setDetailDomi}
                title="Plus de détail"
                children={<DomiDetail
                    selected={selected} />} />

        </div >
    )
}

export default Demande