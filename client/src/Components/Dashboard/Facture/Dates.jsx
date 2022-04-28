export default function Dates({ invoiceNumber, invoiceDate }) {
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Numéro Facture : </span> {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Date Facture :</span> {invoiceDate}
          </li>
        </ul>
      </article>
    </>
  )
}
