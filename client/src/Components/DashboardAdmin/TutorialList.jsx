import files from '../../data/tutorial.json'
import { useState } from 'react'
import Documents from '../../data/doc.json'

import AddTutorial from '../Slideover/AddTutorial'
import AddDocument from '../Slideover/AddDocument'

import Slideover from '../../Layouts/Slideover'




function TutorialList() {
    const [open, setOpen] = useState(false)
    const [openDoc, setOpenDoc] = useState(false)

    return (
        <div>
            <div>

                <header className="py-10">

                    <div className="md:flex md:items-center md:justify-between">
                        <h1 className="text-3xl font-bold text-indigo-900">Video</h1>

                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                        </div>


                        <div className="mt-4 flex md:mt-0 md:ml-4">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}

                                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Ajouter une video
                            </button>
                            <Slideover
                                open={open}
                                setOpen={setOpen}
                                title="Ajouter une video"
                                children={<AddTutorial />} />
                        </div>
                    </div>
                    <div className='py-3'></div>
                </header>

                <ul role="list" className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} className="relative">
                            <div>
                                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                    <iframe src={file.source} alt="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                                    <span className="sr-only">View details for {file.title}</span>
                                </div>
                                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
                                <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.description}</p>
                                <a href="#"
                                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Modifier
                                </a>
                                <button href="#"
                                    className="m-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </li>

                    ))}
                </ul>


                <div className="flex flex-col py-10">

                    <header className="py-10">

                        <div className="md:flex md:items-center md:justify-between">
                            <h1 className="text-3xl font-bold text-indigo-900">Document Utilities</h1>

                            <div className="flex-1 min-w-0">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
                            </div>


                            <div className="mt-4 flex md:mt-0 md:ml-4">
                                <button
                                    type="button"
                                    onClick={() => setOpenDoc(true)}
                                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Ajouter un Document
                                </button>
                                <Slideover
                                    open={openDoc}
                                    setOpen={setOpenDoc}
                                    title="Ajouter un Document"
                                    children={<AddDocument />} />
                            </div>

                        </div>
                        <div className='py-3'></div>
                    </header>

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
                                                Document
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Categorie
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Telecharger</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {Documents.map((Document) => (
                                            <tr key={Document.titre}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Document.titre}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Document.cat}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href={Document.href}
                                                        className="m-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Telecharger
                                                    </a>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href={Document.href}
                                                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Modifier
                                                    </a>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href={Document.href}
                                                        className="m-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                    >
                                                        Supprimer
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


            </div>
        </div>
    )
}

export default TutorialList