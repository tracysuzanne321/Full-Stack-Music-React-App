const apiUrl = process.env.REACT_APP_API_BASE_URL;
const reactAppDomain = process.env.REACT_APP_DOMAIN;

export const getUser = async (setUser, history) => {
	try {
		const token = localStorage.getItem('MyToken');

		if (!token) {
			history.push('/login');
		}

		const response = await fetch(`${apiUrl}/token`, {
			method: 'GET',
			headers: { authorization: `bearer ${token}` },
		});

		const data = await response.json();
		const savedUser = data.username;
		if (savedUser) {
			setUser(savedUser);
		}
	} catch (error) {
		console.log(error);
	}
};

export const createUser = async (username, email, password) => {
	try {
		const response = await fetch(`${apiUrl}/user`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
		});
		const data = await response.json();
		document.cookie = `authToken=${data.token};max-age=604800;domain=${reactAppDomain}`;
		return {
			username: data.result.username,
			email: data.result.email,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const logOut = async () => {
	document.cookie = `authToken=loggedOut;max-age=0;domain=${reactAppDomain}`;
};

export const login = async (email, password) => {
	try {
		console.log(apiUrl);
		const response = await fetch(`${apiUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		const data = await response.json();
		document.cookie = `authToken=${data.token};max-age=604800;domain=${reactAppDomain}`;
		return {
			username: data.user.username,
			email: data.user.email,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getTopTracks = async () => {
	const response = await fetch(
		'http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4',
	);
	const data = await response.json();
	return data.tracks.map((track) => {
		return {
			name: track.name,
			artistName: track.artistName,
			image: `https://api.napster.com/imageserver/v2/artists/${track.artistId}/images/500x500.jpg`,
		};
	});
};
