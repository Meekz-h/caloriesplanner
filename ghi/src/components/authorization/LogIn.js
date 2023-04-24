import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  error,
  reset,
} from "../../features/auth/LogInSlice";
import { useLoginMutation } from "../../services/Entries";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { login_vector } from "../../assets/static";

function LogIn() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { errorMessage, fields } = useSelector((state) => state.login);
  const Navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await login(fields);
    console.log(resp)
    if (resp.error) {
      dispatch(error(resp.error.data.detail));
    } else {
      dispatch(reset());
      Navigate("/", { replace: true });
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 ml-10 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src={login_vector}
              className="object-cover mt-[-20%] mr-20"
              alt="form in a computer"
              style={{ width: "80%", height: "80%" }}
            />
          </div>
          <div className="mb-12 mr-5 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form
              className="mt-[-30%] mb-2  w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-center text-3xl mb-4"
              >
                Log In
              </Typography>
              <div className="relative mt-1 mb-6" data-te-input-wrapper-init>
                <Input
                  size="lg"
                  label="Username"
                  type={`text`}
                  onChange={(e) =>
                    dispatch(handleUsernameChange(e.target.value))
                  }
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <Input
                  type={`password`}
                  size="lg"
                  label="Password"
                  onChange={(e) =>
                    dispatch(handlePasswordChange(e.target.value))
                  }
                />
              </div>
              <div className="flex justify-center items-center">
                <Button type="submit">Log In</Button>
              </div>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign up
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
