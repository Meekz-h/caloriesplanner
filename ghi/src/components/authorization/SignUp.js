import { Input, Button, Typography } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import { useSignupMutation } from "../../services/Entries";
import { signup_vector } from "../../assets/static";

const SignUp = () => {
	const dispatch = useDispatch();
	const [signup] = useSignupMutation();
	const { errorMessage, fields } = useSelector((state) => state.signup);
	const Navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (fields.password !== fields.passwordConfirmation) {
			dispatch(error("Password does not match confirmation"));
			return;
		}

		const { full_name, username, email, age, goal, password } = fields;
		const response = await signup({
			full_name,
			username,
			email,
			age,
			goal,
			password,
		});
		if (response.error) {
			dispatch(error(response.error.data.detail));
		} else {
			dispatch(reset());
			Navigate("/", { replace: true });
		}
	};

	return (
		<section className="h-screen">
			<div className="h-full">
				<div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
					<div className="flex justify-center items-center h-screen-50  shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
						<img
							src={signup_vector}
							className="object-cover mt-[-20%] w-1/2 h-1/2"
							alt="form in a computer"
						/>
					</div>
					<div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
						<form
							className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"
							onSubmit={handleSubmit}
						>
							{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
							<Typography
								className="text-center "
								variant="h4"
								color="blue-gray"
							>
								Sign Up
							</Typography>
							<Typography color="gray" className="mt-2 mb-2 font-normal">
								Enter your details to register.
							</Typography>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<Input
									size="lg"
									label="Name"
									type={`text`}
									id="Signup__fullName"
									value={fields.full_name}
									onChange={(e) =>
										dispatch(handleFullNameChange(e.target.value))
									}
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<Input
									size="lg"
									label="Username"
									type={`text`}
									id="Signup__userName"
									value={fields.username}
									onChange={(e) =>
										dispatch(handleUsernameChange(e.target.value))
									}
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<Input
									size="lg"
									label="Email"
									type={`email`}
									id="Signup__email"
									value={fields.email}
									onChange={(e) => dispatch(handleEmailChange(e.target.value))}
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<Input
									size="lg"
									label="Age"
									type={`number`}
									id="Signup__age"
									value={fields.age}
									onChange={(e) => dispatch(handleAgeChange(e.target.value))}
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<Input
									size="lg"
									label="Goal"
									type={`number`}
									id="Signup__goal"
									value={fields.goal}
									onChange={(e) => dispatch(handleGoalChange(e.target.value))}
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<Input
									size="lg"
									label="Password"
									type={`password`}
									id="Signup__password"
									value={fields.password}
									onChange={(e) =>
										dispatch(handlePasswordChange(e.target.value))
									}
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
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
							<div className="flex justify-center items-center">
								<Button
									type="submit"
									className="mt-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-900"
								>
									Register
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
