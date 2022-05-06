import { useEffect } from "react";
import { useStepperContext } from "../../../../contexts/StepperContext";

export default function Form({ setIsValid, step }) {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        if ((userData["associes"]) && userData["capital"]) {
            setIsValid(step);
        }
    }, [userData])
    return (
        <div className="flex flex-col ">
            <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Y a-t-il des Gérants non associés ?
            </h1>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <select
                    id="associes"
                    name="associes"
                    required
                    value={userData["associes"] || ""}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={handleChange}>
                    <option></option>
                    <option>Non</option>
                    <option>Oui</option>
                </select>
            </div>

            <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                Capital social
            </h1>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <input
                    onChange={handleChange}
                    value={userData["capital"] || ""}
                    name="capital"
                    required
                    placeholder="> 1000 DT"
                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                />
            </div>
        </div>
    );
}