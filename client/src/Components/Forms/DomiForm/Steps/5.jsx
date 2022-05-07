import { useStepperContext } from "../../../../contexts/StepperContext";
import { useEffect } from "react";
import { isCin } from '../../../../functions/VerifData'



export default function Form({ setIsValid, step, setErrorMessage }) {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        if (userData["cin"] && userData["fisc"]) {
            setIsValid(step);
        }
    }, [userData])

    useEffect(() => {
        if (isCin(userData["cin"]) && userData["fisc"]) {
            setIsValid(step);
            setErrorMessage("")
        } else {
            if (!(userData["cin"]) && !userData["cinLink"]) {
                setErrorMessage("Veuillez remplir tous les champs demandés")
            } else {


                if (!isCin(userData["cin"])) {

                    if (!(userData["cin"])) {
                        setErrorMessage("Veuillez Saisir votre N° CIN ")
                    } else {
                        setErrorMessage("Veuillez verifier votre N° CIN ")
                    }
                }

                if (!(userData["fisc"])) {
                    setErrorMessage("Veuillez Saisir votre matricule fiscal")
                }
            }
        }
    }, [userData])



    return (
        <div className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
                <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    N° CIN
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["cin"] || ""}
                        name="cin"
                        required
                        placeholder="00000000"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>

            <div className="w-full mx-2 flex-1">
                <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    N° Matricule Fiscale
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={userData["fisc"] || ""}
                        name="fisc"
                        required
                        placeholder="s/00000000"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
        </div>
    );
}