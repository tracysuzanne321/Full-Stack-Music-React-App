import { useHistory } from 'react-router';
import { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { updateUser, deleteUser, logOut } from '../utils';

const Settings = () => {
	const [valid, setValid] = useState(true);
	const { setUser, setSavedTracks } = useContext(AppContext);
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<form
				className="flex flex-col"
				onSubmit={async (e) => {
					e.preventDefault();
					try {
						const userData = await updateUser(username, email, password);
						setUser(userData);
						history.push('/');
					} catch (e) {
						setValid(false);
					}
				}}>
				<input
					id="email"
					autoFocus={true}
					autoComplete="on"
					className="border border-solid mb-2 px-1 py-1.5 rounded"
					placeholder="Email"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					id="username"
					autoFocus={true}
					autoComplete="on"
					className="border border-solid mb-2 px-1 py-1.5 rounded"
					placeholder="Username"
					type="text"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					id="password"
					className="border border-solid mb-2 px-1 py-1.5 rounded"
					placeholder="Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				{!valid && (
					<div className="mb-2 text-red-600 text-sm">
						Invalid username, email or password!
					</div>
				)}
				<button
					type="submit"
					className="bg-pink-500 hover:bg-black p-1.5 rounded text-white mt-4">
					Update User Settings
				</button>
			</form>
			<button
				onClick={async () => {
					const result = await deleteUser();
					if (result.message === 'success') {
						await logOut();
						setUser({
							username: '',
							email: '',
						});
						setSavedTracks(null);
						history.push('/');
					}
				}}
				className="bg-pink-500 hover:bg-black p-1.5 rounded text-white mt-4 w-full">
				Delete User
			</button>
		</>
	);
};

export default Settings;
