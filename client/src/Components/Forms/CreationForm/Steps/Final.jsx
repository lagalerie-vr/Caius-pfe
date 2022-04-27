import { useStepperContext } from "../../../../contexts/StepperContext";
import { Link } from 'react-router-dom'
import API from "../../../../api/api";
import { useState } from "react";
import { useUser } from "../../../../contexts/AuthProvider";


export default function Final() {

    const [error, setError] = useState(false);
    const [confrimed, setconfrimed] = useState(false);
    const { userData, setUserData } = useStepperContext();
    const user = useUser()._id


    function addData() {
        console.log(user)
        setUserData({ ...userData, userID: user });
        setUserData({ ...userData, state: "En Cours de traitement" });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        addData()
        try {
            const { userData: res } = await API.post("/creations", userData);
            console.log(userData);
            setconfrimed(true);
        } catch (error) {
            setError(true);
        }
    };

    return (

        <div className="container md:mt-10">
            <div className="flex flex-col items-center">
                <div className="wrapper">
                    <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            className="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                        />
                        <path
                            className="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                    </svg>
                </div>


                <div className='py-5'>
                    <div className="relative">
                        <div className="relative flex justify-center text-sm">
                            {error &&
                                <div className="container md:mt-10">
                                    <div className="flex flex-col items-center">
                                        <div className="wrapper">
                                            <svg
                                                className="checkmark"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 52 52"
                                            >
                                                <circle
                                                    className="checkmark__circle"
                                                    cx="26"
                                                    cy="26"
                                                    r="25"
                                                    fill="none"
                                                />
                                                <path
                                                    className="checkmark__check"
                                                    fill="none"
                                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                                />
                                            </svg>
                                        </div>

                                        <div className="mt-3 text-xl font-semibold uppercase text-red-700">
                                            😥 !
                                        </div>
                                        <div className="text-lg font-semibold text-red-500">
                                            votre demande n'a pas pu être envoyé, réessayer plus tard</div>
                                        <Link className="mt-10"
                                            to="/">
                                            <button className="h-10 px-5 text-red-700 transition-colors duration-150 border border-red-300 rounded-lg focus:shadow-outline hover:bg-red-700 hover:text-red-100">
                                                Acceuil
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            }

                            {confrimed &&

                                <div className="container md:mt-10">
                                    <div className="flex flex-col items-center">
                                        <div className="wrapper">
                                            <svg
                                                className="checkmark"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 52 52"
                                            >
                                                <circle
                                                    className="checkmark__circle"
                                                    cx="26"
                                                    cy="26"
                                                    r="25"
                                                    fill="none"
                                                />
                                                <path
                                                    className="checkmark__check"
                                                    fill="none"
                                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                                />
                                            </svg>
                                        </div>

                                        <div className="mt-3 text-xl font-semibold uppercase text-indigo-700">
                                            Felicitations !
                                        </div>
                                        <div className="text-lg font-semibold text-gray-500">
                                            votre demande a été envoyée avec succès
                                        </div>
                                        <Link className="mt-10"
                                            to="/">
                                            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-indigo-700 hover:text-indigo-100">
                                                Acceuil
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>


                {(!confrimed && !error) && <div>
                    <div className="container md:mt-10">
                        <div className="flex flex-col items-center">
                            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-indigo-700 hover:text-indigo-100"

                                onClick={handleSubmit}>
                                Confirmer ma demande
                            </button>

                            <Link className="mt-10"
                                to="/">
                                <button className="h-10 px-5 text-red-700 transition-colors duration-150 border border-red-300 rounded-lg focus:shadow-outline hover:bg-red-700 hover:text-red-100">
                                    Annuler ma demande
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>}


            </div>
        </div >
    );
}