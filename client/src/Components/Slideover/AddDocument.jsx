import { useState } from "react"
import Modal from "../Modals/Modal"

export default function AddDocument() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="px-4 divide-y divide-gray-200 sm:px-6">
                    <div className="space-y-6 pt-6 pb-5">
                        <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                Titre du Document
                            </label>
                            <div className="mt-1">
                                <textarea
                                    type="text"
                                    name="titre"
                                    id="titre"
                                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                Catégorie du Document
                            </label>
                            <div className="mt-1">
                                <textarea
                                    type="text"
                                    name="lien"
                                    id="lien"
                                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Fichier</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file" name="file" type="file" className="sr-only" />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">PDF, PNG, JPEG</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                <button
                    type="submit"
                    onClick={() => setOpen(true)}
                    className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Ajouter
                </button>
            </div>
            <Modal
                open={open}
                setOpen={setOpen} />
        </div>
    )
}
