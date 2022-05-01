import { useEffect, useState } from "react"
import API from "../../api/api"
import { useUser } from "../../contexts/AuthProvider"
import Slideover from "../../Layouts/Slideover"
import MessageDetail from "../Slideover/MessageDetail"



export default function Faq() {
    const user = useUser()

    const [data, setData] = useState([])
    const [selected, setSelected] = useState("")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        async function fetchData() {
            if (user) {
                setData((await API.get(`/expertMessage/expert/${user._id}`)).data)
            }
        }
        fetchData()
    }, [user])

    return (
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
                                        Mail
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Numéro télephone
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((message) => (
                                    <tr key={message._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{message.nom}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.mail}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.number}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            {message.state === "répondu" ?
                                                <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 '>{message.state}</p>
                                                : <p className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800'>{message.state}</p>
                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a
                                                onClick={(e) => { setOpen(true); setSelected(message) }}
                                                className="text-indigo-600 hover:text-indigo-900">
                                                Plus de détail
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Slideover
                open={open}
                setOpen={setOpen}
                title="Ajouter un utilisateur"
                children={<MessageDetail
                    selected={selected}
                />} />
        </div>
    )
}
