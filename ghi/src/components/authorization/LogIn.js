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
    <div className="h-screen flex items-center justify-center">
      <Card color="transparent" shadow={false} className="mx-auto">
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
