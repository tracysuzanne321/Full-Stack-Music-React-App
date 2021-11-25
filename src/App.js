import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Playlist from './pages/playlist';
import { AppContext } from './AppContext';
import Settings from './pages/settings';

const App = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
	});
	const [savedTracks, setSavedTracks] = useState(null);

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
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
