import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import Tiles from '../components/tiles';

const Home = () => {
	const { user } = useContext(AppContext);

	return user.username === '' ? (
		<div className="mt-4 px-4">
			<div className="text-xl mb-4">Welcome to MyMusic</div>
			<Link
				exact
				to="/login"
				className="bg-pink-500 hover:bg-black p-1.5 rounded text-white">
				Click here to log in
			</Link>
		</div>
	) : (
		<div className="mt-4 px-4">
			<div className="text-xl mb-4">
				Hi {user.username}, welcome to MyMusic!
			</div>
			<Tiles />
		</div>
	);
};

export default Home;
