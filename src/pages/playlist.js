import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Tiles from '../components/tiles';

const Playlist = () => {
	const { user } = useContext(AppContext);

	return user.username === '' ? (
		<div className="mt-4 px-4">
			<div className="text-xl mb-4">
				You need to login to view your saved playlist
			</div>
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
				Hi {user.username}, here's your saved playlist
			</div>
			<Tiles onlyShowSaved={true} />
		</div>
	);
};

export default Playlist;
