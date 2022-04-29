
import Slideover from '../../Layouts/Slideover'
import { useState } from 'react'
import MessageExpert from '../Slideover/MessageExpert'
import useGet from '../../data/Functions/useGet'


function Experts() {

    const experts = useGet("/users/role/Expert")


    const [openContacter, setopenContacter] = useState(false)
    return (

        <div>
            <header className="flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
                <h1 className="text-lg font-semibold text-gray-900">
                </h1>
                <div className="flex items-center">
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <div className="w-full sm:max-w-xs">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <input
                                    id="search"
                                    name="search"
                                    className="inline-flex mr-3 items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    placeholder="Search"
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </header>
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
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200">


                                    {experts.map((person) =>
                                    (
                                        <tr key={person.email}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full"
                                                            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                                                            alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{person.nom} {person.prenom}</div>
                                                        <div className="text-sm text-gray-500">{person.mail}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{person.role}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.numero}</td>


                                            <td className="px-6 py-4 whitespace-nowrap">

                                                <div className="text-sm font-medium text-gray-900 py-2"><button href="#"
                                                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    onClick={() => setopenContacter(true)}>Contacter</button></div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <a
                                                    href={`tel:${person.numero}`}
                                                >
                                                    <button
                                                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >Appeler par telephone</button>
                                                </a>
                                            </td>

                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Slideover
                open={openContacter}
                setOpen={setopenContacter}
                title="Contacter"
                children={<MessageExpert />}
            />
        </div>
    )
}

export default Experts