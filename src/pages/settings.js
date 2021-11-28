import Settingsform from '../components/settingsform';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const Settings = () => {
	const { user } = useContext(AppContext);

	return (
		<div className="flex justify-center">
			<div className="w-full max-w-md mt-16 mx-2 sm:mx-0">
				<div className="mb-4">
					<h1 className="text-3xl mb-4">Current Login Details:</h1>
					<div>email: {user.email}</div>
					<div>username: {user.username}</div>
				</div>
				<h1 className="text-3xl mb-4">User Account</h1>
				<Settingsform />
			</div>
		</div>
	);
};

export default Settings;
