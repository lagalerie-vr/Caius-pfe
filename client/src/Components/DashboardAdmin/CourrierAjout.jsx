import axios from "axios";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../api/api";
import useGet from "../../data/Functions/useGet";
import Progress from "../Stats/Progress";
import Modal from '../Modals/Modal';







function Courrier() {

    const [confrimed, setconfrimed] = useState(false);
    const [fileUrl, setFileUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        dateFile: "",
        user: "",
        image: "",
    })




    useEffect(() => {
        setData({
            dateFile: data.dateFile,
            user: data.user,
            image: fileUrl,
        })
        console.log(data)
    }, [fileUrl])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await API.post("/files/uploads", data);
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

    const uploadDelete = (id, e) => {
        e.preventDefault();
        try {
            API.delete(`/files/delete/${id}`)
            setconfrimed(true)
        } catch (error) {
            console.log(error)
        }
    }




    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
        console.log(data)
    }



    const users = useGet("/users/role/Client")
    const Documents = useGet("/files")

    return (
        <div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="px-4 divide-y divide-gray-200 sm:px-6">
                    <div className="space-y-6 pt-6 pb-5">
                        <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                Client
                            </label>
                            <div className="mt-1">
                                <select
                                    id="user"
                                    name="user"
                                    onChange={handleChange}
                                    required
                                    value={data.user}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>  </option>

                                    {users.map((user) => (
                                        <option
                                            value={user._id}
                                        > {user.nom} </option>
                                    ))}

                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                Date recu                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    onChange={handleChange}
                                    required
                                    value={data.dateFile}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="dateFile"
                                    name="dateFile"
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
                                                name="file"
                                                type="file"
                                                accept=".jpg, .jpeg, .png .pdf"
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
                            percentage="0" /> : <Progress
                            percentage="100" />}



                    </div>
                </div>
            </div>

            {!loading ?
                <div className="flex-shrink-0 px-4 py-4 flex justify-end">


                    <button
                        onClick={handleSubmit}
                        className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Envoyer
                    </button>
                </div> : <></>}


            {confrimed &&
                <Modal
                    open={confrimed}
                    setOpen={setconfrimed} />
            }


            <div className="flex flex-col py-10">

                <header className="py-10">

                    <div className="md:flex md:items-center md:justify-between">
                        <h1 className="text-3xl font-bold text-indigo-900">Courrier envoyé</h1>

                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"></h2>
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
                                            Client
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Date
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
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Document.user.nom}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Document.dateFile}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Document.createdAt}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href={Document.image}
                                                    className="m-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                >
                                                    Telecharger
                                                </a>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={(e) => uploadDelete(Document._id, e)}
                                                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                >
                                                    Supprimer

                                                </button>
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


    )
}

export default Courrier