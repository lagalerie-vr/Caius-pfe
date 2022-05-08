import { useUser } from "../../../../contexts/AuthProvider";
import { useStepperContext } from "../../../../contexts/StepperContext";
import { useEffect, useState } from "react";
import { isNomForm } from "../../../../functions/VerifData";

export default function Form({ setIsValid, step, setErrorMessage }) {

    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        if (userData["siege"] && userData["denomination"]) {
            setIsValid(step);
            setErrorMessage("")

        } else {
            if (!userData["siege"] && !userData["denomination"]) {
                setErrorMessage("Veuillez remplir tous les champs demandés")
            } else {
                if (!(userData["siege"])) {
                    setErrorMessage("Veuillez vérifier le champ siége social")
                } else {
                    if (!(userData["denomination"])) {
                        setErrorMessage("Veuillez vérifier  le champ dénomination de Société ")
                    }
                }
            }
        }

    }, [userData])

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">

                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Siège Social :
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["siege"] || ""}
                        name="siege"
                        required
                        placeholder="siege"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Dénomination de Société :
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["denomination"] || ""}
                        name="denomination"
                        required
                        placeholder="denomination"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


            </div>
        </div>
    );
}