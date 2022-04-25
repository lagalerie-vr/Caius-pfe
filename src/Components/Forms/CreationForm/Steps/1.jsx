import { useStepperContext } from "../../../../contexts/StepperContext";

export default function Form() {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const options = [
        "",
        "Consultants et freelance",
        "Construction et travaux",
        "Automobile et transport",
        "Vente en ligne",
        "Commerce",
        "Achat revente",
        "Alimentation",
        "Service à la personne",
        "Autre"
    ]

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Quel nom choisissez-vous pour votre société ?
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["nom"] || ""}
                        name="nom"
                        required
                        placeholder="société"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>

                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Quelle est votre domaine d'activité ?
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <select
                        required
                        value={userData["domaine"] || ""}
                        id="domaine"
                        name="domaine"
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