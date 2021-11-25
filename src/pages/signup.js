import { SignUpForm } from '../components/signupform';

const SignUp = () => {
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-md mt-16 mx-2 sm:mx-0">
				<h1 className="mb-4 text-xl">Create MyMusic account</h1>
				<SignUpForm />
			</div>
		</div>
	);
};

export default SignUp;
