import { Link } from "react-router-dom";

function MainPage() {
	return (
		<>
			<div className="relative overflow-hidden bg-no-repeat bg-cover banner"></div>
			<div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="text-center text-gray-800">
					<div className="flex-wrap backdrop-blur-sm block rounded-xl shadow-lg px-4 py-6 banner-card m-0">
						<h1 className="text-md md:text-5xl xl:text-5xl font-normal tracking-tight mb-4">
							Track Your Calories and Reach Your Goals <br />
						</h1>
						<h2>
							<span className="font md:text-md text-lg tracking-tight font-normal">
								Easily monitor your daily caloric intake and achieve your
								fitness objectives
								<br /> with our simple and effective calorie tracker
							</span>
						</h2>
						<Link
							to="/signup"
							className="rounded-full bg-gradient-to-r from-orange-400 to-orange-900 mt-5 md:mb-0 md:mr-2 leading-snug uppercase shadow-md lg:inline-block text-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-orange-700 dark:focus:ring-orange-400 mr-2 mb-2 active:shadow-lg transition duration-150 ease-in-out"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							href="#!"
							role="button"
						>
							Get started
						</Link>
						<Link
							to="/about"
							className="inline-block px-7 py-3 text-black font-medium text-sm leading-snug bg-transparent le uppercase rounded-full hover:bg-[#FF9119]/80 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							href="#!"
							role="button"
						>
							About Us
						</Link>
					</div>
				</div>
			</div>
			<div className="container my-24 px-6 mx-auto">
				<section className="mb-32 text-gray-800 text-center">
					<h2 className="text-3xl font-bold mb-12 pb-4 text-center">
						Testimonials
					</h2>

					<div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
						<div className="mb-6 lg:mb-0">
							<div className="relative block bg-white rounded-lg shadow-lg">
								<div className="flex">
									<div
										className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										<img
											src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
											alt="testimonial"
											className="w-full"
										/>
										<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
									</div>
								</div>
								<div className="p-6">
									<h5 className="text-lg font-bold mb-2">John Smith</h5>
									<h6 className="font-medium text-blue-600 mb-4">
										Web Developer
									</h6>
									<ul className="flex justify-center mb-6">
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star-half-alt"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 536 512"
											>
												<path
													fill="currentColor"
													d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
												></path>
											</svg>
										</li>
									</ul>
									<p>
										CaloriesPlanner has been a game-changer for me! Thanks to
										its intuitive interface and robust tracking tools, I've been
										able to stay on top of my calorie intake and make healthier
										choices. With the app's help, I've lost over 20 pounds and
										feel better than ever before.
									</p>
								</div>
							</div>
						</div>
						<div className="mb-6 lg:mb-0">
							<div className="relative block bg-white rounded-lg shadow-lg">
								<div className="flex">
									<div
										className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										<img
											src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
											alt="testimonial"
											className="w-full"
										/>
										<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
									</div>
								</div>
								<div className="p-6">
									<h5 className="text-lg font-bold mb-2">Halley Frank</h5>
									<h6 className="font-medium text-blue-600 mb-4">
										Marketing Specialist
									</h6>
									<ul className="flex justify-center mb-6">
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
									</ul>
									<p>
										I've tried several calorie-tracking apps before, but
										CaloriesPlanner is by far the best one I've used. Its
										user-friendly interface and extensive tracking features make
										it easy for me to stay on top of my calorie intake and
										exercise routines. Thanks to CaloriesPlanner, I've been able
										to transform my lifestyle and achieve my fitness goals.
										Highly recommended!
									</p>
								</div>
							</div>
						</div>
						<div className="mb-0">
							<div className="relative block bg-white rounded-lg shadow-lg">
								<div className="flex">
									<div
										className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										<img
											src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
											alt="testimonial"
											className="w-full"
										/>
										<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
									</div>
								</div>
								<div className="p-6">
									<h5 className="text-lg font-bold mb-2">Lisa Trey</h5>
									<h6 className="font-medium text-blue-600 mb-4">
										Public Relations
									</h6>
									<ul className="flex justify-center mb-6">
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</li>
										<li>
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="far"
												data-icon="star"
												className="w-4 text-yellow-500"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
												></path>
											</svg>
										</li>
									</ul>
									<p>
										CaloriesPlanner is an app that I recommend to all my
										clients. It's a powerful tool for tracking calories and
										managing weight loss, but what really sets it apart is the
										personalized support and coaching it provides. The app's
										team of nutrition and fitness experts are always on hand to
										answer questions, offer advice, and keep you motivated.
										Thanks to CaloriesPlanner, I've been able to achieve my
										weight loss goals and maintain a healthy lifestyle.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default MainPage;
