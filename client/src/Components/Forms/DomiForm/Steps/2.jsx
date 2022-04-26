import { useStepperContext } from "../../../../contexts/StepperContext";

export default function Form() {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    return (
        <div className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
                <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Choix de l'abonnement
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <select
                        id="abonnement"
                        name="abonnement"
                        required
                        value={userData["abonnement"] || ""}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={handleChange}>
                        <option></option>
                        <option>Mensuel</option>
                        <option>Annuel</option>

                    </select>
                </div>
            </div>
        </div>
    );
}