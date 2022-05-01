export default function Payment() {
    return (
        <>
            <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
                <h1 className="sr-only">Checkout</h1>


                {/* Checkout form */}
                <section
                    aria-labelledby="payment-heading"
                    className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
                >

                    <form className="mt-6">
                        <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                            <div className="col-span-full">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        id="email-address"
                                        name="email-address"
                                        autoComplete="email"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                    Name on card
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="name-on-card"
                                        name="name-on-card"
                                        autoComplete="cc-name"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                    Card number
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="card-number"
                                        name="card-number"
                                        autoComplete="cc-number"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-8 sm:col-span-9">
                                <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                    Expiration date (MM/YY)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="expiration-date"
                                        id="expiration-date"
                                        autoComplete="cc-exp"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-4 sm:col-span-3">
                                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                    CVC
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="cvc"
                                        id="cvc"
                                        autoComplete="csc"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        autoComplete="street-address"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full sm:col-span-4">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        autoComplete="address-level2"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full sm:col-span-4">
                                <label htmlFor="regino" className="block text-sm font-medium text-gray-700">
                                    State / Province
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="regino"
                                        name="regino"
                                        autoComplete="address-level1"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full sm:col-span-4">
                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                    Postal code
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="postal-code"
                                        name="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Pay
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}
