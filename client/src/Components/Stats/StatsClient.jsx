import { Link } from 'react-router-dom'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'
import useGet from '../../data/Functions/useGet'
import { useUser } from '../../contexts/AuthProvider'
import { useEffect, useState } from 'react'
import API from '../../api/api'





export default function Stats() {
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

    const [creation, setCreation] = useState([])
    const [domiciliation, setDomiciliation] = useState([])

    useEffect(() => {
        async function fetchData() {
            if (user) {
                setCreation((await API.get(`/creations/user/${user._id}`)).data)
                setDomiciliation((await API.get(`/domiciliation/user/${user._id}`)).data)
            }
        }
        fetchData()
    }, [user])

    const stats = [
        { id: 1, name: 'Mes Courrier', stat: Documents.length, icon: UsersIcon, link: "/courrier" },
        { id: 2, name: 'N° Demande effectué', stat: creation.length + domiciliation.length, icon: MailOpenIcon, link: "/demande" },
    ]

    return (
        <div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                    >
                        <dt>
                            <div className="absolute bg-indigo-800 rounded-md p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <Link to={item.link} className="font-medium text-indigo-800 hover:text-indigo-500">
                                        Voir plus
                                    </Link>
                                </div>
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
            <hr className='mt-4 mb-4' />

        </div>
    )
}
