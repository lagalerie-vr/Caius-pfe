import { Link } from 'react-router-dom'


function CTA() {
    return (
        <div>

            <div className="relative">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="People working on laptops"
                        />
                        <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">NOS SERVICE!</span>
                        </h1>
                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                            Pour commencer, sélectionnez le service souhaité.
                        </p>
                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">



                            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                                <Link
                                    to="/CreationForm"
                                    className="col-span-1 m-2 text-center text-base font-medium rounded-md justify-center py-8 px-8 bg-gray-50 text-indigo-800  hover:bg-indigo-200">

                                    Création d'entreprise

                                </Link>
                                <Link
                                    to="/Domicilitation"
                                    className="col-span-1  m-2 text-center text-base font-medium rounded-md justify-center py-8 px-8 bg-gray-50 text-indigo-800  hover:bg-indigo-200">

                                    Domiciliation
                                </Link>
                                <Link
                                    to="/statut"
                                    className="col-span-1  m-2 text-center text-base font-medium rounded-md justify-center py-8 px-8 bg-gray-50 text-indigo-800  hover:bg-indigo-200">

                                    Création statut SA

                                </Link>

                                <Link
                                    to="/expert"
                                    className="col-span-1  m-2 text-center text-base font-medium rounded-md justify-center py-8 px-8 bg-gray-50 text-indigo-800  hover:bg-indigo-200">

                                    Accompagnement
                                </Link>

                                <Link
                                    to="/expert"
                                    className="col-span-1  m-2 text-center text-base font-medium rounded-md justify-center py-8 px-8 bg-gray-50 text-indigo-800  hover:bg-indigo-200">

                                    Evenement
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div >


        </div>
    )
}

export default CTA