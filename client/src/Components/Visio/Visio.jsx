import React, { useState } from 'react'
import JitsiComponent from './JitsiComponent'
import { useUser } from '../../contexts/AuthProvider'

function Visio() {
    const user = useUser()
    console.log(user)
    const [room, setRoom] = useState()
    const [start, setStart] = useState(false)
    const [show, setShow] = useState(true)



    const handleRoom = async (e) => {
        e.preventDefault();
        setShow(false)
        setStart(true)
    };



    return (

        <div>
            {show &&
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
                            <p className=" max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                Pour commencer, sélectionnez l'option souhaité.
                            </p>

                            <form onSubmit={handleRoom}>
                                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                        <input
                                            id="Cle"
                                            name="Cle"
                                            type="text"
                                            required
                                            onChange={(e) => setRoom(e.target.value)}
                                            placeholder="Cle"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <button
                                            className="flex uppercase items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                        >
                                            rejoindre une room
                                        </button>
                                    </div>



                                </div>
                            </form>

                            <form onSubmit={handleRoom}>
                                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    <button
                                        onClick={(() => setRoom(user.email))}
                                        className="flex uppercase items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                    >
                                        Créé une room
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }

            <div className='py-5'>
                <div className="relative">
                    {start &&
                        <div>
                            <JitsiComponent
                                room={room} />
                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <button
                                    onClick={(() => {
                                        setStart(false)
                                        setShow(true)
                                    })}
                                    className="flex uppercase items-center text-red-50 bg-red-900 justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm  bg-white hover:bg-red-50 hover:text-red-700 sm:px-8">
                                    Fermer
                                </button>
                            </div>
                        </div>}
                </div>

            </div>
        </div >
    )
}

export default Visio



