import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  reset,
} from "../../features/auth/LogInSlice";
import { useLoginMutation } from "../../services/Auth";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function LogIn() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { fields } = useSelector((state) => state.login);
  const Navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log({ fields });
    const resp = await login(fields);
    console.log("resp:",resp);
    if (resp.data) {
      Navigate("/",{replace: true})
    } else {
      dispatch(reset());
    }
  };

  return (
    <div>
        <div className="relative overflow-hidden grid grid-cols-12 banner_login">
          <div className="col-span-3 text-white font-sans font-bold bg-black pl-7 h-screen">
            <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start px-4 sm:px-6 lg:px-8">
              <div className="row-span-4 row-start-2 text-4xl">
                Log In
                <form onSubmit={handleSubmit}>
                  <div className="pt-10">
                    <label className="text-sm font-sans font-medium">
                      Username
                    </label>
                    <input type="text" label="Username" onChange={(e) => dispatch(handleUsernameChange(e.target.value))} name="username" placeholder="Enter your username" className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans" />
                  </div>
                  <div className="pt-2">
                    <label className="text-sm font-sans font-medium">
                      Password
                    </label>
                    <input type="password" label="Password" onChange={(e) => dispatch(handlePasswordChange(e.target.value))} name="password" placeholder="Enter your password" className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans" />
                  </div>
                  {/* Button */}
                  <div className="text-sm font-sans font-medium w-full pt-14">
                    <button type="submit" className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
              {/* Text */}
              <a href className="text-sm font-sans font-medium text-gray-400 underline">
                <Link
                  to="/signup"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                  Don´t have an account? Sign up
                </Link>
              </a>
            </div>
          </div>
            {/* Second column image */}
            <div className="banner_login col-span-9 text-white font-sans font-bold max-w-full h-auto object-fit-contain m-auto bg-no-repeat bg-cover">
            {/* Aquí iría algún comentario */}
          </div>
        </div>
      </div>
  );
}

export default LogIn;
