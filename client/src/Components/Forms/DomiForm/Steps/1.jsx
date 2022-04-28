import { useUser } from "../../../../contexts/AuthProvider";
import { useStepperContext } from "../../../../contexts/StepperContext";
import { useState } from "react";


export default function Form() {

    const user = useUser()

    const [done, setDone] = useState(false)

    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        if (!done) {
            id()
        }
    };

    async function id() {
        await setUserData({ ...userData, user: user._id });
        setDone(true)

    }
    const options = [
        "",
        "SAS ou SASU",
        "SARL ou EURL",
        "SCI",
        "Association",
        "Micro-entreprise",
    ]

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Nom de la société à domicilier
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["nom"] || ""}
                        name="nom"
                        required
                        placeholder="CAIRUS BC"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>

                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Forme juridique de la société à domicilier
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <select
                        required
                        value={userData["forme"] || ""}
                        id="forme"
                        name="forme"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={handleChange}
                    >
                        {options.map((option) => (
                            <option>{option}</option>
                        ))}
                    </select>
                </div>


            </div>
        </div>
    );
}