import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import Tiles from '../components/tiles';

const Home = () => {
	const { user } = useContext(AppContext);

	return user.username === '' ? (
		<div className="mt-8 px-4 flex flex-col items-center">
			<div className="text-3xl mb-4">Welcome to MyMusic</div>
			<Link
				exact
				to="/login"
				className="bg-pink-500 hover:bg-black p-1.5 rounded text-white mt-4">
				Click here to log in
			</Link>
			<Link
				exact
				to="/signup"
				className="bg-pink-500 hover:bg-black p-1.5 rounded text-white mt-8">
				Click here to sign up
			</Link>
		</div>
	) : (
		<div className="mt-4 px-4">
			<div className="text-xl mb-4">
				<div className="flex">
					Hi {user.username}, welcome to MyMusic!
					<Link
						exact
						to="/settings"
						className="bg-pink-500 hover:bg-black p-1.5 rounded text-white mt-8">
						User Settings
					</Link>
				</div>
			</div>
			<Tiles />
		</div>
	);
};

export default Home;
