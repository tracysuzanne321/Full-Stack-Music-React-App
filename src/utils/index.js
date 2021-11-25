const apiUrl = process.env.REACT_APP_API_BASE_URL;
const reactAppDomain = process.env.REACT_APP_DOMAIN;
//*Done
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
			id: data.result._id,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
//!Need to code
export const updateUser = async (id, username, email, password) => {
	try {
		const response = await fetch(`${apiUrl}/update/${id}`, {
			method: 'PATCH',
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
			id: data.result._id,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
//!Need to code
export const deleteUser = async (id) => {
	try {
		await fetch(`${apiUrl}/delete/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		});
		return {
			message: 'success',
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
//*Done
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
			id: data.user._id,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
//*Done
export const logOut = async () => {
	document.cookie = `authToken=loggedOut;max-age=0;domain=${reactAppDomain}`;
};

export const getTopTracks = async () => {
	const response = await fetch(
		'https://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4',
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
//!Need to code
export const addTrack = async (track) => {
	try {
		const response = await fetch(`${apiUrl}/music`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				track: track,
			}),
		});
		const data = await response.json();
		document.cookie = `authToken=${data.token};max-age=604800;domain=${reactAppDomain}`;
		return {
			track: data.result.track,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
//!!Need to code
export const deleteTrack = async (track) => {
	try {
		const response = await fetch(`${apiUrl}/delete_track/:id`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				track: track,
			}),
		});
		const data = await response.json();
		document.cookie = `authToken=${data.token};max-age=604800;domain=${reactAppDomain}`;
		return {
			track: data.result.track,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
