import { LogInForm } from '../components/loginform';

const Login = () => {
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-md mt-16 mx-2 sm:mx-0">
				<h1 className="mb-4 text-xl">Login To Your Account</h1>
				<LogInForm />
			</div>
		</div>
	);
};

export default Login;
