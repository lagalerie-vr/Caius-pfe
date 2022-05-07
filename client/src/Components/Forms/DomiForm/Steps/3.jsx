import { useStepperContext } from "../../../../contexts/StepperContext";
import { useEffect } from "react";
export default function Form({ setIsValid, step, setErrorMessage }) {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        if (userData["reexpedition"]) {
            setIsValid(step);
            setErrorMessage("")

        } else {
            if (!userData["reexpedition"]) {
                setErrorMessage("Veuillez sélectionner la fréquences de réexpéditions.")
            }
        }
    }, [userData])

    return (
        <div className="flex flex-col ">
            <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Fréquence de réexpédition
            </h1>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <select
                    id="reexpedition"
                    name="reexpedition"
                    required
                    value={userData["reexpedition"] || ""}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={handleChange}>
                    <option></option>
                    <option>Chaque mois</option>
                    <option>Chaque semaine</option>
                </select>
            </div>
        </div>
    );
}