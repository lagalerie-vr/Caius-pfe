import React, { useState } from 'react'
import API from '../../api/api';
import useGet from '../../data/Functions/useGet'
import Slideover from '../../Layouts/Slideover';
import DomiDetail from '../Slideover/DomiDetail'

import Modal from '../Modals/Modal';

function Demande() {

    const [confrimed, setconfrimed] = useState(false);
    const [selected, setSelected] = useState("")
    const [detailCreation, setDetailCreation] = useState(false)
    const [detailDomi, setDetailDomi] = useState(false)

    const creationDelete = (id, e) => {
        e.preventDefault();
        try {
            API.put(`/creations/refuser/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const domicilationDelete = (id, e) => {
        e.preventDefault();
        try {
            API.put(`/domiciliation/refuser/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const domicilationAccept = (id, e) => {
        e.preventDefault();
        try {
            API.put(`/domiciliation/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const creationAccept = (id, e) => {
        e.preventDefault();
        try {
            API.put(`/creations/${id}`)
            console.log("done")
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const demandeCreation = useGet("/creations/state/Passer a l'Expert")
    const demandeDomiciliation = useGet("/Domiciliation/state/Passer a l'Expert")

    return (
        <div>
            <header className="py-10">

                <div className="md:flex md:items-center md:justify-between">
                    <h1 className="text-3xl font-bold text-indigo-900">Demande de Creation</h1>

                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                    </div>
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

                            <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-red-700 bg-white rounded-lg hover:bg-red-800 hover:text-white"
                                onClick={(e) => creationDelete(demande._id, e)}
                            >
                                Refuser la demande
                            </a>

                            {demande.state === "Acceptée" ? <></> :
                                <a className="inline-flex ml-3 items-center py-2 px-3 text-sm font-medium text-center text-green-700 bg-white rounded-lg hover:bg-green-800 hover:text-white"
                                    onClick={(e) => creationAccept(demande._id, e)}
                                >
                                    Acceptée la demande
                                </a>
                            }

                            <a className="mt-3 ml-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-indigo-700 bg-white rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
                                onClick={(e) => { setDetailCreation(true); setSelected(demande) }}
                            >
                                Plus de détails
                            </a>

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
                </div>
                <div className='py-3'></div>
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
                            <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-red-700 bg-white rounded-lg hover:bg-red-800 hover:text-white"
                                onClick={(e) => domicilationDelete(demande._id, e)}
                            >
                                Supprimer
                            </a>

                            {demande.state === "Acceptée" ? <></> :
                                <a className="inline-flex ml-3 items-center py-2 px-3 text-sm font-medium text-center text-green-700 bg-white rounded-lg hover:bg-green-800 hover:text-white"
                                    onClick={(e) => domicilationAccept(demande._id, e)}
                                >
                                    Acceptée la demande
                                </a>
                            }
                            <a className="mt-3 ml-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-indigo-700 bg-white rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
                                onClick={(e) => { setDetailDomi(true); setSelected(demande) }}
                            >
                                Plus de détails
                            </a>

                        </div>
                    </div>
                ))
                }
            </ul >
            {confrimed &&
                <Modal
                    open={confrimed}
                    setOpen={setconfrimed} />}

            <Slideover
                open={detailCreation}
                setOpen={setDetailCreation}
                title="Plus de détail"
                children={<DomiDetail
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