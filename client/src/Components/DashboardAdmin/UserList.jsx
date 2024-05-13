import React, { useEffect, useState } from 'react'
import AddUser from '../../Components/Slideover/AddUser'
import API from '../../api/api'

import Slideover from '../../Layouts/Slideover'
import EditUser from '../Slideover/EditUser'
import Modal from '../Modals/Modal'


function UserList() {


    const [role, setRole] = useState("Tous les utilisateurs")
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function RolePick() {
            if (role === "Tous les utilisateurs") {
                setPeople((await API.get("/Users")).data)
            } else {
                setPeople((await API.get(`/users/role/${role}`)).data)
            }
        }
        RolePick()
    }, [role])

    const [confrimed, setconfrimed] = useState(null);
    const [selected, setSelected] = useState("")
    const [open, setOpen] = useState(false)
    const [openEdit, setopenEdit] = useState(false)

    const userDelete = (id, e) => {
        e.preventDefault();
        try {
            API.delete(`/Users/user/${id}`)
            console.log("done")
            setconfrimed(true)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }


    const handleChange = ({ currentTarget: input }) => {
        setRole(input.value)
    }


    return (
        <div>
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">


                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <div className="col-span-6 sm:col-span-3">
                            <select
                                id="role"
                                name="role"
                                onChange={handleChange}
                                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            >
                                <option>Tous les utilisateurs</option>
                                <option value="default">User</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Ajouter un nouveau utilisateur
                        </button>
                        <Slideover
                            open={open}
                            setOpen={setOpen}
                            title="Ajouter un utilisateur"
                            children={<AddUser />} />
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
                                        {people.map((person) => (
                                            <tr key={person.email}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full"
                                                                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900 uppercase">{person.nom}</div>
                                                            <div className="text-sm text-gray-500">{person.prenom}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{person.role}</div>
                                                </td>


                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="text-sm font-medium text-gray-900">{person.mail}</div>
                                                </td>


                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="text-sm font-medium text-gray-900">{person.numero}</div>
                                                </td>



                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button href="#" className="text-green-600 hover:text-green-900"
                                                        onClick={(e) => { setopenEdit(true); setSelected(person) }}
                                                    >
                                                        <a
                                                            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                        >
                                                            Modifier
                                                        </a>
                                                    </button>

                                                </td>


                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={(e) => userDelete(person._id, e)}
                                                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                    >
                                                        Supprimer

                                                    </button>
                                                </td>


                                            </tr>
                                        ))}

                                        {confrimed &&
                                            <Modal
                                                open={confrimed}
                                                setOpen={setconfrimed} />}


                                        <Slideover
                                            open={openEdit}
                                            setOpen={setopenEdit}
                                            title="Modifier un utilisateur"
                                            children={<EditUser
                                                user={selected} />} />


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </div >
    )
}

export default UserList