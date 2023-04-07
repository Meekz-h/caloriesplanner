import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleFullNameChange,
  handleEmailChange,
  handleUsernameChange,
  handleAgeChange,
  handleGoalChange,
  handlePasswordChange,
  handlePasswordConfirmationChange,
  reset,
  error,
} from "../../features/auth/SignUpSlice";
import ErrorMessage from "./ErrorMessage";
import { useSignupMutation } from "../../services/Entries"
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation()
  const { errorMessage, fields } = useSelector((state) => state.signup);
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fields.password !== fields.passwordConfirmation) {
      dispatch(error("Password does not match confirmation"));
      return;
    }
    const { full_name, username, email, age, goal, password } = fields;

        const resp = await signup({
            full_name,
            username,
            email,
            age,
            goal,
            password,
        });
        console.log(resp)
        if (resp.error){
            dispatch(error(resp.error.data.detail))
        } else {
            dispatch(reset());
            Navigate("/", {replace: true})
        }



  };
  return (
    <div className="h-screen flex items-center justify- ">
      {/* <div
            class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
                class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image" />
        </div>
        </div> */}
      <Card color="transparent" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <div className="mb-4 flex flex-col gap-1">
            <Input
              size="lg"
              label="Name"
              type={`text`}
              id="Signup__fullName"
              value={fields.full_name}
              onChange={(e) => dispatch(handleFullNameChange(e.target.value))}
            />
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <Input
              size="lg"
              label="Username"
              type={`text`}
              id="Signup__userName"
              value={fields.username}
              onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
            />
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <Input
              size="lg"
              label="Email"
              type={`email`}
              id="Signup__email"
              value={fields.email}
              onChange={(e) => dispatch(handleEmailChange(e.target.value))}
            />
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <Input
              size="lg"
              label="Age"
              type={`number`}
              id="Signup__age"
              value={fields.age}
              onChange={(e) => dispatch(handleAgeChange(e.target.value))}
            />
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <Input
              size="lg"
              label="Goal"
              type={`number`}
              id="Signup__goal"
              value={fields.goal}
              onChange={(e) => dispatch(handleGoalChange(e.target.value))}
            />
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <Input
              size="lg"
              label="Password"
              type={`password`}
              id="Signup__password"
              value={fields.password}
              onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
            />
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <Input
              size="lg"
              label="Password confirmation"
              type={`password`}
              id="Signup__passwordConfirmation"
              value={fields.passwordConfirmation}
              onChange={(e) =>
                dispatch(handlePasswordConfirmationChange(e.target.value))
              }
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default SignUp;
