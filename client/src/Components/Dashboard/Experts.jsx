
import Slideover from '../../Layouts/Slideover'
import { useEffect, useState } from 'react'
import MessageExpert from '../Slideover/MessageExpert'
import useGet from '../../data/Functions/useGet'
import ExpertMessage from './ExpertMessage'


function Experts() {



    const experts = useGet("/users/role/Expert")

    const [selected, setSelected] = useState("")
    const [openContacter, setopenContacter] = useState(false)

    return (

        <div>
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
                                            Nom
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Role
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
                                                    onClick={
                                                        () => {
                                                            setopenContacter(true);
                                                            setSelected(person);
                                                        }
                                                    }

                                                >Contacter</button></div>
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
                children={<MessageExpert
                    selected={selected} />}
            />

            <ExpertMessage />

        </div>
    )
}

export default Experts