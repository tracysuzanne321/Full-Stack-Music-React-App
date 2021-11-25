import { createContext } from 'react';

export const AppContext = createContext({
	setUser: () => {},
	user: {
		username: '',
		email: '',
	},
	savedTracks: null,
	setSavedTracks: () => {},
});
