

import { useState, useRef, useEffect } from "react"
import ReactToPrint from "react-to-print"

function App({ selected }) {

    useEffect(() => {
        if (selected) {
            setNomSociete(selected.nomSociete)
            setCapital(selected.capital)
            setSiege(selected.siege)
            setObjet(selected.objet)
            setDenomination(selected.denomination)
            setActions(selected.actions)
            setPartie(selected.partie)
            setPlafond(selected.plafond)
            setGaranties(selected.garanties)
            setDate(selected.createdAt)
        }
    }, [selected])

    const [nomSociete, setNomSociete] = useState("")
    const [capital, setCapital] = useState("")
    const [siege, setSiege] = useState("")
    const [objet, setObjet] = useState("")
    const [denomination, setDenomination] = useState("")
    const [actions, setActions] = useState("")
    const [partie, setPartie] = useState("")
    const [plafond, setPlafond] = useState("")
    const [garanties, setGaranties] = useState("")
    const [date, setDate] = useState("")

    const componentRef = useRef()

    return (
        <>

            {/* Invoice Preview */}
            <div className="invoice__preview bg-white p-5 rounded">
                <ReactToPrint
                    trigger={() => (
                        <button className="bg-indigo-700 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-indigo-200 hover:text-indigo-700 transition-all duration-300">
                            Imprimer / Télécharger
                        </button>
                    )}
                    content={() => componentRef.current}
                />
                <div>

                </div>
            </div>
        </>
    )
}

export default App
