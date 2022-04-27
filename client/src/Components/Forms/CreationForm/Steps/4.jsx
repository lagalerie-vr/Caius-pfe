import { useStepperContext } from "../../../../contexts/StepperContext";



export default function Form() {


    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    return (
        <div className="flex flex-col ">
            <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Où sera fixé le siège social de la Société ?
            </h1>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <select
                    id="siege"
                    name="siege"
                    required
                    value={userData["siege"] || ""}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={handleChange}>
                    <option></option>
                    <option>Domiciliation avec Cairus</option>
                    <option>Au domicile du Gérant</option>
                    <option>Dans un centre de domiciliation déjà choisi</option>
                    <option>Dans d'autres locaux</option>
                </select>
            </div>

            <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Que recherchez-vous ?
            </h1>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <select
                    id="recherche"
                    name="recherche"
                    required
                    value={userData["recherche"] || ""}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={handleChange}>
                    <option></option>
                    <option>Créer ma société en déléguant toutes les démarches</option>
                    <option>Seulement des statuts</option>
                    <option>Une solution tout en un (création, comptabilité, banque, etc..)</option>
                    <option>Du conseil juridique et fiscal avec un expert comptable ou/et avocat</option>
                    <option>Je me renseigne</option>
                </select>
            </div>
        </div>
    );
}