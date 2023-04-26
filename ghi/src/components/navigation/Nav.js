import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "@material-tailwind/react";
import { useGetAccountQuery } from "../../services/Entries";
import { useLogoutMutation } from "../../services/Entries";
import { useNavigate } from "react-router-dom";

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
                  Log A Meal
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
            {!account ? (
              <Link to="/login">
                <Button variant="gradient" size="sm">
                  <span>Log in</span>
                </Button>
              </Link>
            ) : (
              <>
                <div>
                  <Link to="/">
                    <Button variant="gradient" size="sm" onClick={handleLogOut}>
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
    </>
  );
}

export default Nav;
