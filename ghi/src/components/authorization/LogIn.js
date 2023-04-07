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
  error,
  reset,
} from "../../features/auth/LogInSlice";
import { useLoginMutation } from "../../services/Entries";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

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
    <div className="h-screen flex items-center justify-center">
      <Card color="transparent" shadow={false} className="mx-auto">
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Typography variant="h4" color="blue-gray">
          Log In
        </Typography>

        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Username"
              onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
            />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Log In
          </Button>
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
      </Card>
    </div>
  );
}

export default LogIn;
