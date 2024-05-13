

function Page(props) {
    return (

        <div>
            <div className="min-h-full">
                <div className=" pb-32 px-4 sm:px-6 max-w-7xl mx-auto">
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-red-900">
                                {props.title}
                            </h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 ">
                            {props.content}
                    </div >
                </main >
            </div >
        </div>
    )
}

export default Page