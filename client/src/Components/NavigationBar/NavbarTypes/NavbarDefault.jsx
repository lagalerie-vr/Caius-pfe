import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import logo from '../../../Assets/logoWW.png'
import { useUser } from '../../../contexts/AuthProvider'


function NavbarDefault() {
    const user = useUser()

    const navigation = [
        { name: 'Dashboard', href: '/' },
        { name: 'Mes demande', href: '/demande' },
        { name: 'Calendrier ', href: 'Calendar' },
        { name: 'Tutoriel', href: 'Tutorial' },
    ]

    const userNavigation = [

        { name: 'Contract', href: '/Contract' },
        { name: 'Facture', href: '/Facture' },
        { name: 'Settings', href: '/Settings' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function handleLogout() {
        localStorage.removeItem("token");
        window.location.reload();
    }


    return (
        <>
            <Disclosure as="header" className="bg-indigo-800">
                {({ open }) => (
                    <>
                        <div className=" max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-indigo-700 lg:px-8">
                            <div className="relative h-16 flex justify-between">
                                <div className="relative z-10 px-2 flex lg:px-0">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                    </div>
                                </div>
                                <div className="relative z-10 flex items-center lg:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden lg:relative  lg:ml-4 lg:flex lg:items-center">

                                    <div className="text-sm font-medium text-indigo-200">{user.nom}</div>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="flex-shrink-0 relative ml-4">
                                        <div>
                                            <Menu.Button className="bg-indigo-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <Link
                                                                to={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-indigo-100' : '',
                                                                    'block py-2 px-4 text-sm text-indigo-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}

                                                <button
                                                    onClick={handleLogout}
                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-red-700 text-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                                    Deconnecte
                                                </button>


                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.current ? 'bg-indigo-900 text-white' : 'text-indigo-300 hover:bg-indigo-700 hover:text-white',
                                            'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                            <div className="pt-2 pb-3 px-2 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-indigo-900 text-white' : 'text-indigo-300 hover:bg-indigo-700 hover:text-white',
                                            'block rounded-md py-2 px-3 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-indigo-700 pt-4 pb-3">
                                <div className="px-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">{user.mail}</div>
                                        <div className="text-sm font-medium text-indigo-400">{user.email}</div>
                                    </div>
                                </div>
                                <div className="mt-3 px-2 space-y-1">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md py-2 px-3 text-base font-medium text-indigo-400 hover:bg-indigo-700 hover:text-white"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}

                                    <button
                                        onClick={handleLogout}
                                        className="block rounded-md py-2 px-3 text-base font-medium text-indigo-400 hover:bg-indigo-700 hover:text-white"
                                    >
                                        Deconnecte
                                    </button>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}


export default NavbarDefault