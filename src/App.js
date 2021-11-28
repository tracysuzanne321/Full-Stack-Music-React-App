import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Playlist from './pages/playlist';
import { AppContext } from './AppContext';
import Settings from './pages/settings';
import Footer from './components/footer';
import { attemptTokenLogin } from './utils';

const App = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
	});
	const [savedTracks, setSavedTracks] = useState(null);

	useEffect(() => {
		async function fetchData() {
			if (user.username === '') {
				const signedInUser = await attemptTokenLogin();
				if (signedInUser !== null) {
					setUser(signedInUser);
				}
			}
		}
		fetchData();
	}, [user, setUser]);

	return (
		<AppContext.Provider value={{ user, setUser, savedTracks, setSavedTracks }}>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/settings">
						<Settings />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/playlist">
						<Playlist />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
