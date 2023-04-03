

function MainPage() {
    return (
        <>
            <div className="relative overflow-hidden bg-no-repeat bg-cover banner"></div>
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="text-center text-gray-800">
                    <div className="block rounded-lg shadow-lg px-8 py-4 md:py-12 md:px-8 banner-card m-0">
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-4">Track Your Calories and Reach Your Goals <br /></h1>
                        <h2><span className="text-blue-600 text-lg tracking-tight font-bold">Easily monitor your daily caloric intake and achieve your fitness objectives<br /> with our simple and effective calorie tracker</span></h2>
                        <a className="inline-block px-7 py-3  mt-5 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                        <a className="inline-block px-7 py-3 text-black font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">About Us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
