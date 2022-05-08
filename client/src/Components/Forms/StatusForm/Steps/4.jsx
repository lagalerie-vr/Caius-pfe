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
        if ((userData["garanties"]) && userData["plafond"] && !isCapital1000(parseInt(userData["garanties"])) && !isCapital1000(parseInt(userData["plafond"]))) {
            setIsValid(step);
            setErrorMessage("")

        } else {
            if (!userData["plafond"] && !userData["garanties"]) {
                setErrorMessage("Veuillez remplir tous les champs demandés")
            } else {

                if (!(userData["garanties"]) || !isCapital1000(parseInt(userData["garanties"]))) {
                    if (!(userData["garanties"])) {
                        setErrorMessage("Veuillez saisir votre garanties")
                    }
                    if (isCapital1000(parseInt(userData["garanties"])))
                        setErrorMessage("Votre garanties doit etre >= 1000")
                }
                else {
                    if (!(userData["plafond"])) {
                        setErrorMessage("Veuillez saisir votre plafond")
                    }
                    if (isCapital1000(parseInt(userData["plafond"])))
                        setErrorMessage("Votre plafond doit etre >= 1000")
                }
            }
        }

    }, [userData])


    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">

                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Plafond des emprunts importants conclus au profit de la société
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["plafond"] || ""}
                        name="plafond"
                        required
                        placeholder="1000"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Les garanties des dettes d’autrui pour tout montant supérieur à :
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["garanties"] || ""}
                        name="garanties"
                        required
                        placeholder="5"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


            </div>
        </div>
    );
}