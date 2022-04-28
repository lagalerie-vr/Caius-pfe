export default function ClientDetails({ clientName, clientPhone }) {
  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-3xl uppercase mb-1">{clientName}</h2>
        <p>{clientPhone}</p>
      </section>
    </>

  )
}

