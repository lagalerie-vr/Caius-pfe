import { useUser } from "../../../../contexts/AuthProvider";
import { useStepperContext } from "../../../../contexts/StepperContext";
import { useEffect, useState } from "react";
import { isCapital1000, isNomForm, isPositivNumber } from "../../../../functions/VerifData";

export default function Form({ setIsValid, step, setErrorMessage }) {



    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        if ((userData["actions"]) && userData["capital"] && !isCapital1000(parseInt(userData["capital"]))) {
            partie()
            setIsValid(step);
            setErrorMessage("")

        } else {
            if (!userData["capital"] && !userData["actions"]) {
                setErrorMessage("Veuillez remplir tous les champs demandés")
            } else {

                if (!(userData["actions"]) || !isPositivNumber(userData["actions"])) {
                    setErrorMessage("Veuillez vérifier  le N° d'actions ")

                } else {
                    if (!(userData["capital"])) {
                        setErrorMessage("Veuillez saisir votre capital")
                    }
                    if (isCapital1000(parseInt(userData["capital"])))
                        setErrorMessage("Votre capital doit etre >= 1000")
                }
            }
        }

    }, [userData])

    function partie() {
        setUserData({ ...userData, partie: (parseInt(userData['capital']) / parseInt(userData['actions'])) });
    }

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">

                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Capital Social en dinars :
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["capital"] || ""}
                        name="capital"
                        required
                        placeholder="1000"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    N° des actions
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["actions"] || ""}
                        name="actions"
                        required
                        placeholder="5"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


            </div>
        </div>
    );
}