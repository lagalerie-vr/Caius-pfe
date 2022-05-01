import { useState } from 'react'
import useGet from '../../data/Functions/useGet'

import Slideover from '../../Layouts/Slideover'
import Facture from '../Facture/Facture'

function FactureList() {

    const list = useGet("/creations/accepted/Acceptée")

    const [open, setOpen] = useState(false)
    const [openView, setOpenView] = useState(false)
    const [selected, setSelected] = useState(null)

    return (
        <>
            <div>
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Filtre
                        </button>
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Ajouter une nouvelle startup
                        </button>
                    </div>

                    <Slideover
                        open={open}
                        setOpen={setOpen}
                        title="startup"
                        children="startup" />

                </div>
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

                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">supprimer</span>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {list.map((listitem) => (
                                            <tr key={listitem.email}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900"> {listitem.clientName}</div>
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


                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button href="#" className="text-red-600 hover:text-red-900"
                                                    >
                                                        Supprimer
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