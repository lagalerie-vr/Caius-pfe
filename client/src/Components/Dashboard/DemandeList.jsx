import React from 'react'
import demandeCreation from '../../data/demandeCreation.json'
import demandeDomiciliation from '../../data/demandeDomiciliation.json'

function Demande() {
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
                        <a href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{demande.nom}</h5>
                            </a>
                            <hr className="mb-3" />
                            <p className="mb-3 font-normal text-white">Domaine : {demande.domaine}</p>
                            <hr className="mb-3" />
                            <p className="mb-3 font-normal text-white">{demande.recherche}</p>
                            <hr className="mb-3" />
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-indigo-700 bg-white rounded-lg hover:bg-blue-800 hover:text-white">
                                Plus d'inofrmation
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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
                        <a href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{demande.nom}</h5>
                            </a>
                            <hr className="mb-3" />
                            <p className="mb-3 font-normal text-white">Forme : {demande.forme}</p>
                            <hr className="mb-3" />
                            <p className="mb-3 font-normal text-white">Abonnement : {demande.abonnement}</p>
                            <hr className="mb-3" />
                            <p className="mb-3 font-normal text-white">Adresse : {demande.adresse}</p>
                            <hr className="mb-3" />
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-indigo-700 bg-white rounded-lg hover:bg-blue-800 hover:text-white">
                                Plus d'inofrmation
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                ))
                }
            </ul >
        </div >
    )
}

export default Demande