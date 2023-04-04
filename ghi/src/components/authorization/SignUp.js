import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";


function SignUp() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" />
                    <Input size="lg" label="Email" />
                    <Input type="password" size="lg" label="Password" />
                    </div>
                    <Button className="mt-6" fullWidth>
                    Register
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default SignUp