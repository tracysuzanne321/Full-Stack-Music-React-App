import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Playlist from './pages/playlist';
import { AppContext } from './AppContext';

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
