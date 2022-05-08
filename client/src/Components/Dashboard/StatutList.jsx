import { useEffect, useState } from 'react'

import Slideover from '../../Layouts/Slideover'
import StatutsSA from '../Pdf/StatutsSA'
import { useUser } from '../../contexts/AuthProvider';
import API from '../../api/api';
import { Link } from 'react-router-dom';



function StatutList() {

    const user = useUser()

    useEffect(() => {
        async function fetchData() {
            if (user) {
                setStatut((await API.get(`/statut/user/${user._id}`)).data)
            }
        }
        fetchData()
    }, [user])

    const [statut, setStatut] = useState([])

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

                        <Link
                            to="/statut"
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Rédiger un nouveau statut
                        </Link>
                    </div>

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
                                                Nom societe
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Ref
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Siège Social
                                            </th>

                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {statut.map((listitem) => (
                                            <tr key={listitem.email}>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900"> {listitem.nomSociete}</div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{listitem._id}</div>
                                                </td>


                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{listitem.siege}</div>
                                                </td>


                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a
                                                        onClick={(e) => { setOpenView(true); setSelected(listitem) }}
                                                        className=" ml-10 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Voir Statut
                                                    </a>
                                                </td>

                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <Slideover
                                    open={openView}
                                    setOpen={setOpenView}
                                    title="Statut"
                                    children={
                                        <StatutsSA
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

export default StatutList