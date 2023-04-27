import { Typography } from "@material-tailwind/react";
import { vector } from "../../assets/static";

function Footer() {
	return (
		<div className="flex flex-wrap">
			<footer className="w-full sticky bg-white mb-4">
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="flex flex-col md:flex-row md:items-center justify-center gap-y-2 bg-white text-center md:justify-between pb-4">
					<img src={vector} alt="logo-ct" className="object-contain h-8" />
					<div className="w-full max-w-screen-xl mx-auto">
						<Typography
							color="black"
							className="mx-auto text-center text-[25px] md:justify-between font-light items-center mb-4"
						>
							&copy; 2023 Foodies™. All rights reserved.
						</Typography>
					</div>

					<ul className="hidden md:flex flex-wrap items-center gap-y-2 gap-x-6 mr-4 mb-2">
						<li>
							<Typography
								as="a"
								href="/about"
								color="black"
								className="font-light transition-colors text-[25px]  focus:text-orange-500 hover:text-orange-600"
							>
								About Us
							</Typography>
						</li>
						<li>
							<Typography
								as="a"
								href="/contact"
								color="black"
								className="font-light text-[25px]transition-colors  focus:text-orange-500 hover:text-orange-600"
							>
								Contact Us
							</Typography>
						</li>
					</ul>
					<div className="md:hidden flex flex-wrap items-center justify-center gap-y-2 gap-x-6 mb-4">
						<Typography
							as="a"
							href="/about"
							color="black"
							className="font-normal transition-colors  focus:text-orange-500 hover:text-orange-600"
						>
							About Us
						</Typography>
						<Typography
							as="a"
							href="/contact"
							color="black"
							className="font-normal transition-colors  focus:text-orange-500 hover:text-orange-600"
						>
							Contact Us
						</Typography>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
