import axios from "axios";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../api/api";
import useGet from "../../data/Functions/useGet";
import Progress from "../Progress";
import Modal from '../Modals/Modal';
import { useUser } from "../../contexts/AuthProvider";







function Courrier() {

    const [confrimed, setconfrimed] = useState(false)
    const user = useUser()

    useEffect(() => {
        async function fetchData() {
            if (user) {
                setDocuments((await API.get(`/files/user/${user._id}`)).data)
            }
        }
        fetchData()
    }, [user])

    const [Documents, setDocuments] = useState([])

    return (
        <div>

            {confrimed &&
                <Modal
                    open={confrimed}
                    setOpen={setconfrimed} />
            }



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
                                        Client
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Date courrier
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Date recu
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Telecharger</span>
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Telecharger</span>
                                    </th>
                                </tr>
                            </thead>


                            <tbody className="bg-white divide-y divide-gray-200">
                                {Documents.map((Document) => (
                                    <tr key={Document._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.nom}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Document.dateFile}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Document.createdAt}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={Document.image}
                                                className="m-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                Telecharger
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Courrier