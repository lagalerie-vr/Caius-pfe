import API from "../../api/api";
import { useState } from "react";
import Modal from "../Modals/Modal";

export default function AddTutorial() {


    const [data, setData] = useState({
        titre: "",
        lien: "",
        description: "",
    })

    const [error, setError] = useState(false);
    const [confrimed, setconfrimed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { data: res } = await API.post("/videos", data);
            console.log(res.message);
            setconfrimed(true);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };




    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    return (
        <div>
            <form className="space-y-6" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Titre
                    </label>
                    <div className="mt-1">
                        <input
                            id="titre"
                            name="titre"
                            type="text"
                            required
                            value={data.titre}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Lien                                </label>
                    <div className="mt-1">
                        <input
                            id="lien"
                            name="lien"
                            type="link"
                            required
                            value={data.lien}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Description                                </label>
                    <div className="mt-1">
                        <input
                            id="description"
                            name="description"
                            type="text"
                            required
                            value={data.description}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Ajouter une video
                    </button>
                </div>
            </form>
            <div className='py-5'>
                <div className="relative">
                    <div className="relative flex justify-center text-sm">
                        {error && <span className="px-2 bg-white text-red-500" >error</span>}
                        {confrimed &&
                            <Modal
                                open={confrimed}
                                setOpen={setconfrimed} />}                    </div>
                </div>
            </div>
        </div>
    )
}
