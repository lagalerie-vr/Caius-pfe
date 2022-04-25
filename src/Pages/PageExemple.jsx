

function page() {
    return (

        <div>
            <div className="min-h-full">
                <div className="bg-gray-100 pb-32">
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-indigo-900">
                                Page title
                            </h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">

                            Page Content

                        </div>
                    </div >
                </main >
            </div >
        </div>
    )
}

export default page