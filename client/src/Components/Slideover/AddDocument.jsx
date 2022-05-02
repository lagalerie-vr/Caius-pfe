import { useEffect, useState } from "react"
import Modal from "../Modals/Modal"
import API from "../../api/api";
import axios from "axios";
import Progress from "../Progress";

export default function AddDocument() {
    const [confrimed, setconfrimed] = useState(false);
    const [fileUrl, setFileUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        titre: "",
        desc: "",
        image: "",
    })


    useEffect(() => {
        setData({
            desc: data.desc,
            titre: data.titre,
            image: fileUrl,
        })
        console.log(data)
    }, [fileUrl])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await API.post("/documents", data);
            console.log(res.message);
            setconfrimed(true);
        } catch (error) {
            console.log(error)
        }
    };

    const uploadImage = async (file) => {
        const form = new FormData()
        form.append('file', file)
        form.append("upload_preset", "mindup")
        await axios.post("https://api.cloudinary.com/v1_1/mindup/upload", form)
            .then(result => setFileUrl(result.data.secure_url))
        setLoading(false)
    }


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
        console.log(data)
    }



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
                                <input
                                    onChange={handleChange}
                                    required
                                    value={data.titre}
                                    type="text"
                                    name="titre"
                                    id="titre"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                Description du Document
                            </label>
                            <div className="mt-1">
                                <input
                                    onChange={handleChange}
                                    required
                                    value={data.desc}
                                    type="text"
                                    name="desc"
                                    id="desc"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {loading ?
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
                                            <span>Partager un fichier </span>
                                            <input
                                                id="file"
                                                accept=".jpg, .jpeg, .png, .pdf"
                                                name="file"
                                                type="file"
                                                className="sr-only"
                                                onChange={e => uploadImage(e.target.files[0])}
                                                required
                                                value={data.file}
                                            />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">PDF, PNG, JPEG</p>
                                </div>
                            </div> : <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                                            <span>Changer le fichier </span>
                                            <input
                                                id="file"
                                                name="file"
                                                type="file"
                                                className="sr-only"
                                                onChange={e => uploadImage(e.target.files[0])}
                                                required
                                                value={data.file}
                                            />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">PDF, PNG, JPEG</p>
                                </div>
                            </div>
                        }

                        {loading ? <Progress
                            percentage="0" /> : <>


                            <Progress
                                percentage="100" />

                            <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Ajouter
                                </button>
                            </div>

                        </>
                        }



                    </div>
                </div>
            </div>

            <Modal
                open={confrimed}
                setOpen={setconfrimed} />
        </div>
    )
}
