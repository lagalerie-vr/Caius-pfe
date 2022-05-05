import logo from '../../../Assets/logo.png'

export default function Header({ handlePrint }) {
  return (
    <>
      <header className="flex flex-col mb-5 xl:flex-row xl:justify-between">
        <div className="relative z-10 px-2 flex lg:px-0">
          <img
            className="block h-20 w-auto"
            src={logo}
            alt="Workflow"
          />
        </div>
      </header>
    </>
  )
}
