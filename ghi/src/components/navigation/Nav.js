import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import { useGetAccountQuery } from "../../services/Entries";
import { useLogoutMutation } from "../../services/Entries";
import { logo } from "../../assets/static";

function Nav() {
	const [logout] = useLogoutMutation();
	const Navigate = useNavigate();
	const { data: account } = useGetAccountQuery();

	const handleLogOut = (e) => {
		e.preventDefault();
		logout();
		Navigate("/", { replace: true });
	};

	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full">
					<Navbar className="sticky inset-0 z-10 h-17 max-w-full rounded py-0.5 px-1 lg:px-8 lg:py-4 pb-[-20%]">
						<div className="flex items-center justify-between text-blue-gray-900">
							<Link
								as="a"
								to="/"
								className="mr-4 cursor-pointer py-1.5 font-medium"
							>
								<img src={logo} alt="logo" className="object-contain" />
							</Link>
							<div className="m-auto flex items-center gap-10 text-xl">
								<span className="p-0.5 font-light text-[25px] justify-self-center flex-aut hover:text-orange-600">
									<Link to="/" className="flex items-center">
										Home
									</Link>
								</span>
								<span className="p-0.5 font-light text-[25px] justify-self-center flex-auto hover:text-orange-600">
									<Link to="/about" className="flex items-center">
										About Us
									</Link>
								</span>
								{!account ? (
									<></>
								) : (
									<span className="p-0.5 font-light text-[25px] justify-self-center hover:text-orange-600">
										<Link to="/meals" className="flex items-center">
											Log A Meal
										</Link>
									</span>
								)}
								<span className="p-0.5 font-light text-[25px] justify-self-center flex-auto hover:text-orange-600">
									<Link to="/contact" className="flex items-center">
										Contact
									</Link>
								</span>
							</div>
							<div className="flex font-normal text-xs items-center gap-4">
								{!account ? (
									<Link to="/login">
										<Button
											variant="gradient"
											className="rounded-full bg-gradient-to-r from-orange-400 to-orange-900"
											size="sm"
										>
											<span>Log in</span>
										</Button>
									</Link>
								) : (
									<>
										<div>
											<Link to="/">
												<Button
													variant="gradient"
													className="rounded-full bg-gradient-to-r from-orange-400 to-orange-900"
													onClick={handleLogOut}
												>
													<span>Log out</span>
												</Button>
											</Link>
											<span className="ml-2 font-semibold">
												{account.full_name}
											</span>
										</div>
									</>
								)}
							</div>
						</div>
					</Navbar>
				</div>
			</div>
		</>
	);
}

export default Nav;
