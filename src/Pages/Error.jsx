import { Link } from "react-router-dom";

/* This example requires Tailwind CSS v2.0+ */
export default function Error() {
    return (
        <>
            <main
                className="min-h-full bg-cover bg-top sm:bg-top"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
                    <p className="text-sm font-semibold text-white uppercase tracking-wide">404 error</p>
                    <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                        Uh oh! I think you’re lost.
                    </h1>
                    <p className="mt-2 text-lg font-medium text-white">
                        It looks like the page you’re looking for doesn't exist.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
