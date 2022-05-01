import React from "react"

export default function Table({ pack, prix, description }) {
  let total = (parseInt(prix * 0.19) + parseInt(prix))


  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Pack</td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Prix HT</td>
            <td className="font-bold">TVA</td>
            <td className="font-bold">Montant Total</td>
          </tr>
        </thead>
        <React.Fragment>
          <tbody>
            <tr className="h-10">
              <td>{pack}</td>
              <td>{description}</td>
              <td>{prix}</td>
              <td>19%</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </React.Fragment>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          TND. {total}
        </h2>
      </div>
    </>
  )
}
