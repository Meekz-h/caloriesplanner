import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();
	const [showSuccess, setShowSuccess] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		emailjs
			.send(
				"service_frac9ba",
				"template_nouynib",
				{
					from_name: form.name,
					to_name: "Team Foodie",
					from_email: form.email,
					to_email: "teamfoodiest@gmail.com",
					message: form.message,
				},
				"G0sFXjGLcZpYR4Jwh"
			)
			.then(
				() => {
					setLoading(false);
					setForm({
						name: "",
						email: "",
						message: "",
					});
					setShowSuccess(true);
					setTimeout(() => {
						setShowSuccess(false);
					}, 3000);
				},
				() => {
					setLoading(false);
					console.error("Failed to send email.");
				}
			);
	};

	return (
		<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Send us a message!
				</h2>
			</div>
			<div>
				{showSuccess && (
					<div className="alert alert-success" role="alert">
						Message sent successfully!
					</div>
				)}
			</div>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="mx-auto max-w-xl sm:mt-20"
			>
				<div className="sm:col-span-2">
					<div className="mt-[-5%]">
						<label
							htmlFor="name"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Full Name
						</label>
						<div className="mt-2.5">
							<input
								type={`text`}
								label="name"
								name="name"
								id="name"
								placeholder="what's your name?"
								value={form.name}
								onChange={handleChange}
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div className="sm:col-span-2 mt-4">
						<label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Email
						</label>
						<div className="mt-2.5">
							<input
								type={`email`}
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="what's your email?"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div className="sm:col-span-2 mt-4">
						<label
							htmlFor="message"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Message
						</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								rows={7}
								value={form.message}
								onChange={handleChange}
								placeholder="what do you want to say?"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
				</div>
				<div className="mt-10 flex justify-center items-center">
					<button
						type="submit"
						className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						{loading ? "Sending..." : "Let's talk"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
