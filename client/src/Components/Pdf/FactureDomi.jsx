import { useState, useRef, useEffect } from "react"
import ClientDetails from "./FactureComponents/ClientDetails"
import Dates from "./FactureComponents/Dates"
import Footer from "./FactureComponents/Footer"
import Header from "./FactureComponents/Header"
import Table from "./FactureComponents/Table"
import ReactToPrint from "react-to-print"

function App({ selected }) {


  useEffect(() => {
    if (selected) {
      setClientName(selected.nom);
      setClientPhone(selected.clientPhone);
      setPack("Creation");
      setDescription(selected.recherche);
      setPrix("60");
      setInvoiceNumber(selected._id)
      setInvoiceDate(selected.createdAt)
    }
  }, [selected])

  const [clientName, setClientName] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [pack, setPack] = useState("")
  const [description, setDescription] = useState("")
  const [prix, setPrix] = useState("")

  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }

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
        <div ref={componentRef} className="p-5">
          <Header handlePrint={handlePrint} />


          <ClientDetails
            clientName={clientName}
            clientPhone={clientPhone}
          />

          <Dates
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
          />

          <Table
            description={description}
            prix={prix}
            pack={pack}
          />

          <Footer
          />
        </div>
      </div>
    </>
  )
}

export default App
