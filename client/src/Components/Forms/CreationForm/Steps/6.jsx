import axios from "axios";
import { useEffect, useState } from "react";
import { useStepperContext } from "../../../../contexts/StepperContext";
import Progress from '../../../Stats/Progress'

export default function Form() {

    const { userData, setUserData } = useStepperContext();

    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    const uploadComptable = async (file) => {
        const form = new FormData()
        form.append('file', file)
        form.append("upload_preset", "mindup")
        await axios.post("https://api.cloudinary.com/v1_1/mindup/upload", form)
            .then(result => setUserData({ ...userData, comptable: (result.data.secure_url) }))

        setLoading(false)
    }


    return (
        <div className="flex flex-col ">

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
                            <span>Copie d'une procuration au nom du comptable </span>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                accept=".jpg, .jpeg, .png, .pdf"
                                className="sr-only"
                                onChange={e => uploadComptable(e.target.files[0])}
                                required
                            />
                        </label>
                    </div>
                    <p className="text-xs text-gray-500">PDF, PNG, JPEG</p>
                </div>
            </div>
            {loading ? <Progress
                percentage="0" /> : <Progress
                percentage="100" />}

        </div>
    );
}