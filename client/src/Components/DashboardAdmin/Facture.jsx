import { useState } from 'react'
import useGet from '../../data/Functions/useGet'

import Slideover from '../../Layouts/Slideover'
import Facture from '../Facture/Facture'



function FactureList() {

    const creation = useGet("/creations/state/Acceptée")
    const domiciliation = useGet("/Domiciliation/state/Acceptée")


    const [open, setOpen] = useState(false)
    const [openView, setOpenView] = useState(false)
    const [selected, setSelected] = useState(null)

    return (
        <>
            <div>

                <header className="py-3">

                    <div className="md:flex md:items-center md:justify-between">
                        <h className="text-3xl font-bold text-indigo-900">Facture des demandes des creation</h>

                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                        </div>
                    </div>
                </header>

                <div className='py-3'></div>

                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Nom Startup
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Responsable
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Mail
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Numéro
                                            </th>

                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {creation.map((listitem) => (
                                            <tr key={listitem.email}>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900"> {listitem.nom}</div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{listitem.domaine}</div>
                                                </td>


                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <a
                                                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-indigo-700"
                                                    >
                                                        {listitem.nomGerant}
                                                    </a></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{listitem.siege}</td>



                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button href="#" className="text-indigo-600 hover:text-indigo-900"
                                                        onClick={(e) => { setOpenView(true); setSelected(listitem) }}
                                                    >
                                                        Voir facture
                                                    </button>
                                                </td>

                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <Slideover
                                    open={openView}
                                    setOpen={setOpenView}
                                    title="Facture"
                                    children={
                                        <Facture
                                            selected={selected} />
                                    } />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-3'></div>

                <header className="py-3">

                    <div className="md:flex md:items-center md:justify-between">
                        <h className="text-3xl font-bold text-indigo-900">Facture des demandes des domiciliation</h>

                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                        </div>
                    </div>
                </header>
                <div className='py-3'></div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Nom Startup
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Responsable
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Mail
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Numéro
                                            </th>

                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {domiciliation.map((listitem) => (
                                            <tr key={listitem.email}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900"> {listitem.nom}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{listitem.clientName}</div>
                                                    <div className="text-sm text-gray-500">{listitem.clientName}</div>
                                                </td>


                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">                                                            <a
                                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-indigo-700"
                                                >
                                                    {listitem.clientName}                                                </a></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{listitem.clientName}</td>



                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button href="#" className="text-indigo-600 hover:text-indigo-900"
                                                        onClick={(e) => { setOpenView(true); setSelected(listitem) }}
                                                    >
                                                        Voir facture
                                                    </button>
                                                </td>

                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <Slideover
                                    open={openView}
                                    setOpen={setOpenView}
                                    title="Facture"
                                    children={
                                        <Facture
                                            selected={selected} />
                                    } />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-3'></div>


            </div>
        </>)
}

export default FactureList