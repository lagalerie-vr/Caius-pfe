import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from "../../api/api";
import useGet from "../../data/Functions/useGet";
import Progress from "../Progress";






function Courrier() {

    const [confrimed, setconfrimed] = useState(false);


    const [data, setData] = useState({
        dateFile: "",
        user: "",
        image: "",
    })




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await api.post("/users/register", data);
            console.log(res.message);
            setconfrimed(true);
        } catch (error) {
            console.log(error)
        }
    };



    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
        console.log(data)
    }

    const users = useGet("/users/role/Client")

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
                                    {users.map((user) => (
                                        <option> {user.nom} </option>
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
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="dateFile"
                                    name="dateFile"
                                    required
                                    value={data.dateFile}
                                />
                            </div>
                        </div>

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
                                        <input id="file" name="file" type="file" className="sr-only"
                                            onChange={handleChange}
                                            required
                                            value={data.file}
                                        />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500">PDF, PNG, JPEG</p>
                            </div>
                        </div>
                        <Progress
                            percentage="0" />



                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 px-4 py-4 flex justify-end">


                <button
                    type="submit"
                    className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Envoyer
                </button>
            </div>
        </div>
    )
}

export default Courrier