import { useState, useRef, useEffect } from "react"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Footer from "./Footer"
import Header from "./Header"
import Table from "./Table"
import ReactToPrint from "react-to-print"

function App({ selected }) {


  useEffect(() => {
    if (selected) {
      setClientName(selected.clientName);
      setClientPhone(selected.clientPhone);
      setPack(selected.pack);
      setDescription(selected.description);
      setPrix(selected.prix);
      setInvoiceNumber(selected.id)
      setInvoiceDate((new Date()).toDateString())
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
              Print / Download
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
