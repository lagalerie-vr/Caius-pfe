import { useUser } from "../../../../contexts/AuthProvider";
import { useStepperContext } from "../../../../contexts/StepperContext";
import { useEffect, useState } from "react";
import { isNomForm } from "../../../../functions/VerifData";

export default function Form({ setIsValid, step, setErrorMessage }) {

    const user = useUser()

    useEffect(() => {
        if (!userData["user"]) {
            id()
        }
    }, [user])


    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        if (userData["nomSociete"] && isNomForm(userData["nomSociete"]) && userData["objet"]) {
            setIsValid(step);
            setErrorMessage("")

        } else {
            if (!userData["nomSociete"] && !userData["objet"]) {
                setErrorMessage("Veuillez remplir tous les champs demandés")
            } else {
                if (!isNomForm(userData["nomSociete"])) {
                    setErrorMessage("Veuillez vérifier le nom de votre société ")
                } else {
                    if (!userData["objet"]) {
                        setErrorMessage("Veuillez vérifier l'objet")
                    }
                }
            }
        }

    }, [userData])

    async function id() {
        await setUserData({ ...userData, user: user._id });
    }

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">

                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Le nom de votre société :
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["nomSociete"] || ""}
                        name="nomSociete"
                        required
                        placeholder="Cairus"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


                <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Votre société a pour objet :
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["objet"] || ""}
                        name="objet"
                        required
                        placeholder="objet"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>


            </div>
        </div>
    );
}