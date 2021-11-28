import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { logOut } from '../utils';
import { useHistory } from 'react-router';
import logo from '../images/logo512.png';

const Navbar = () => {
	const { setUser, user, setSavedTracks } = useContext(AppContext);
	const history = useHistory();
	return (
		<nav className="flex py-6 bg-black text-white items-center">
			<img alt="logo" className="h-6 ml-6 mr-2 mt-0.5" src={logo} />
			<div className="pr-8 text-xl">MyMusic</div>
			<ul className="flex flex-grow">
				<li className="w-16">
					<NavLink
						exact
						to="/"
						className="hover:text-pink-500"
						activeClassName="text-pink-500">
						Home
					</NavLink>
				</li>
				<li className="w-16">
					<NavLink
						to="/playlist"
						className="hover:text-pink-500"
						activeClassName="text-pink-500">
						Playlist
					</NavLink>
				</li>
				{user.username === '' ? (
					<>
						<li className="w-16 ml-auto">
							<NavLink
								to="/login"
								className="hover:text-pink-500"
								activeClassName="text-pink-500">
								Log In
							</NavLink>
						</li>
						<li className="w-16 mr-7">
							<NavLink
								to="/signup"
								className="hover:text-pink-500"
								activeClassName="text-pink-500">
								Sign Up
							</NavLink>
						</li>
					</>
				) : (
					<>
						<li className="w-16 ml-auto mr-4">
							<NavLink
								exact
								to="/settings"
								className="hover:text-pink-500"
								activeClassName="text-pink-500">
								Settings
							</NavLink>
						</li>
						<li className="w-16 mr-7">
							<a
								href="#logout"
								onClick={async () => {
									await logOut();
									setUser({
										username: '',
										email: '',
									});
									setSavedTracks(null);
									history.go('/');
								}}
								className="hover:text-pink-500">
								Log Out
							</a>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
