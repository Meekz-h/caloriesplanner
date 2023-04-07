<section className="h-screen">
    <div className="h-full">
        <!-- Left column container with background-->
        <div
        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div
            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image" />
        </div>

        <!-- Right column container -->
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <Typography classNameName='text-center' variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" classNameName="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form onSubmit={handleSubmit}>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {/* <!--Sign in section--> */}
                <div
                    className="flex flex-row items-center justify-center lg:justify-start"

                >

                    <p className="mb-0 mr-4 text-lg">Sign in with</p>
                </div>
                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        size="lg"
                        label="Name"
                        type={`text`}
                        id="Signup__fullName"
                        value={fields.full_name}
                        onChange={e => dispatch(handleFullNameChange(e.target.value))}
                    />
                </div>
                {/* <!-- Password input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        size="lg"
                        label="Username"
                        type={`text`}
                        id="Signup__userName"
                        value={fields.username}
                        onChange={e => dispatch(handleUsernameChange(e.target.value))}
                    />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        size="lg"
                        label="Email"
                        type={`email`}
                        id="Signup__email"
                        value={fields.email}
                        onChange={e => dispatch(handleEmailChange(e.target.value))}
                    />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        size="lg"
                        label="Age"
                        type={`number`}
                        id="Signup__age"
                        value={fields.age}
                        onChange={e => dispatch(handleAgeChange(e.target.value))}
                    />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        size="lg"
                        label="Goal"
                        type={`number`}
                        id="Signup__goal"
                        value={fields.goal}
                        onChange={e => dispatch(handleGoalChange(e.target.value))}
                    />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        size="lg"
                        label="Password"
                        type={`password`}
                        id="Signup__password"
                        value={fields.password}
                        onChange={e => dispatch(handlePasswordChange(e.target.value))}
                    />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        size="lg"
                        label="Password confirmation"
                        type={`password`}
                        id="Signup__passwordConfirmation"
                        value={fields.passwordConfirmation}
                        onChange={e => dispatch(handlePasswordConfirmationChange(e.target.value))}e={e => dispatch(handlePasswordChange(e.target.value))}
                    />
                </div>
                <Button type="submit" className="mt-6" fullWidth>
                    Register
                </Button>
            </form>
        </div>
        </div>
    </div>
</section>
