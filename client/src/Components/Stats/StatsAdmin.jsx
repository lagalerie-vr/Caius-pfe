import { Link } from 'react-router-dom'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'
import useGet from '../../data/Functions/useGet'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Stats() {
    const Clients = useGet("/users/role/Client")
    const defaults = useGet("/users/role/default")

    const Creation = useGet("/creations/state/En Cours de traitement")
    const Domicilation = useGet("/domiciliation/state/En Cours de traitement")

    const expert = useGet("/creations/state/Passer a l'Expert")
    const Refuser = useGet("/creations/state/Refuser")
    const Accepted = useGet("/creations/state/Acceptée")

    const expert2 = useGet("/domiciliation/state/Passer a l'Expert")
    const Refuser2 = useGet("/domiciliation/state/Refuser")
    const Accepted2 = useGet("/domiciliation/state/Acceptée")

    const stats = [
        { id: 1, name: 'N° Client', stat: Clients.length + defaults.length, icon: UsersIcon, link: "/Users" },
        { id: 2, name: 'N° Demande en attente', stat: Creation.length + Domicilation.length, icon: MailOpenIcon, link: "/demande" },

        { id: 5, name: "N° des Demande passer par les client", stat: Creation.length + Domicilation.length + expert.length + expert2.length + Refuser2.length + Refuser.length + Accepted2.length + Accepted.length, icon: CursorClickIcon, link: "/demande" },

        { id: 3, name: "N° Demande passer a l'expert", stat: expert.length + expert2.length, icon: CursorClickIcon, link: "/demande" },
        { id: 4, name: "N° Demande des demandes acceptées par l'expert", stat: Accepted2.length + Accepted.length, icon: CursorClickIcon, link: "/demande" },
        { id: 6, name: "N° Demande des demandes refuser par l'expert", stat: Refuser2.length + Refuser.length, icon: CursorClickIcon, link: "/demande" },
    ]

    const data01 = [
        { name: 'Demandes de creations', value: expert.length + Refuser.length + Accepted.length },
        { name: 'Demandes de domiciliations', value: expert2.length + Refuser2.length + Accepted2.length },
    ];


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
