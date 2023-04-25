import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
	Card,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useGetAccountQuery } from "../../services/Entries";
import { useLogoutMutation } from "../../services/Entries";
import { useNavigate } from "react-router-dom";

import { logo } from "../../assets/static";

function Nav() {
	const [logout] = useLogoutMutation();
	const Navigate = useNavigate();
	const [openNav, setOpenNav] = useState(false);
	const { data: account } = useGetAccountQuery();

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const handleLogOut = (e) => {
		e.preventDefault();
		logout();
		Navigate("/", { replace: true });
	};

	// const navList = (
	//   <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
	//     {/* <Typography
	//       as="li"
	//       variant="small"
	//       color="blue-gray"
	//       className="p-1 font-normal"
	//     >
	//       <a href="#" className="flex items-center">
	//         Home
	//       </a>
	//     </Typography>
	//     <Typography
	//       as="li"
	//       variant="small"
	//       color="blue-gray"
	//       className="p-1 font-normal"
	//     >
	//       <a href="#" className="flex items-center">
	//         About Us
	//       </a>
	//     </Typography> */}
	//   </ul>
	// );

	return (
		<>
			<Navbar className="sticky inset-0 z-10 h-17 max-w-full rounded-none py-0.5 px-1 lg:px-8 lg:py-4">
				<div className="flex items-center justify-between text-blue-gray-900">
					<Link
						as="a"
						to="/"
						className="mr-4 cursor-pointer py-1.5 font-medium"
					>
						<img src={logo} alt="logo" className="object-contain" />
					</Link>
					<div className="m-auto flex items-center gap-10 text-xl">
						<span className="p-1 font-normal justify-self-center flex-auto">
							<Link to="/" className="flex items-center">
								Home
							</Link>
						</span>
						<span className="p-1 font-normal justify-self-center flex-auto">
							<Link to="/about" className="flex items-center">
								About Us
							</Link>
						</span>
						{!account ? (
							<></>
						) : (
							<span className="p-1 font-normal justify-self-center">
								<Link to="/meals" className="flex items-center">
									Meals
								</Link>
							</span>
						)}
						<span className="p-1 font-normal justify-self-center flex-auto">
							<Link to="/contact" className="flex items-center">
								Contact
							</Link>
						</span>
					</div>
					<div className="flex items-center gap-4">
						{/* <Link className="mr-4 hidden lg:block" to="/login"> */}
						{/* {navList} */}
						{!account ? (
							<Link to="/login">
								<Button
									variant="gradient"
									size="sm"
									className="hidden lg:inline-block"
								>
									<span>Log in</span>
								</Button>
							</Link>
						) : (
							<>
								<div>
									{/* <Typography
                    as="p"
                    variant="large"
                    color="blue-gray"
                    className="p-1 font-normal"
                  >
                    <Link to="/meals" className="flex items-center">
                      Meals
                    </Link>
                    </Typography> */}
								</div>
								<div>
									<Link to="/">
										<Button
											variant="gradient"
											size="sm"
											className="hidden lg:inline-block"
											onClick={handleLogOut}
										>
											<span>Log out</span>
										</Button>
									</Link>
									<span className="ml-2 inline font-semibold">
										{account.full_name}
									</span>
								</div>
							</>
						)}
						{/* </Link> */}
						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<MobileNav open={openNav}>
					{/* {navList} */}
					<Button variant="gradient" size="sm" fullWidth className="mb-2">
						<span>Log In</span>
					</Button>
					<Button variant="gradient" size="sm" fullWidth className="mb-2">
						<span>Sign Up</span>
					</Button>
				</MobileNav>
			</Navbar>
		</>
	);
}

export default Nav;
