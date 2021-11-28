import { useContext, useEffect, useState } from 'react';
import { addTrack, deleteTrack, getSavedTracks, getTopTracks } from '../utils';
import { AppContext } from '../AppContext';

const Tiles = ({ onlyShowSaved = false }) => {
	const { savedTracks, setSavedTracks } = useContext(AppContext);
	const [tracks, setTracks] = useState();
	useEffect(() => {
		async function fetchData() {
			if (savedTracks === null) {
				const tracksSavedInDb = await getSavedTracks();
				setSavedTracks(tracksSavedInDb);
			}
			if (onlyShowSaved === false) {
				const topTracks = await getTopTracks();
				setTracks(topTracks);
			} else {
				setTracks(savedTracks);
			}
		}
		fetchData();
	}, [onlyShowSaved, savedTracks, setSavedTracks]);

	return (
		<div className="flex flex-wrap">
			{onlyShowSaved && (!tracks || tracks.length === 0) && (
				<div>Oops, doesn't look like you've saved any tracks!</div>
			)}
			{tracks &&
				tracks.map((track) => (
					<div
						key={`${track.name}_${track.artistName}`}
						className="flex flex-col w-full xs:w-1/2 sm:w-1/3 md:w-1/4 p-2">
						<img
							className="rounded"
							alt={`${track.name} cover art`}
							src={track.image}
						/>
						<div className="text-sm truncate">{track.name}</div>
						<div className="text-xs">{track.artistName}</div>
						<button
							onClick={() => {
								if (onlyShowSaved) {
									const newSavedTracks = savedTracks.filter(
										(savedTrack) =>
											savedTrack.id !== `${track.name}_${track.artistName}`,
									);
									setSavedTracks(newSavedTracks);
									deleteTrack(track);
									setTracks(newSavedTracks);
								} else {
									if (
										savedTracks.some(
											(savedTrack) =>
												savedTrack.id === `${track.name}_${track.artistName}`,
										) === false
									) {
										const currentTracks = savedTracks ?? [];
										addTrack(track);
										track.id = `${track.name}_${track.artistName}`;
										setSavedTracks([...currentTracks, track]);
									}
								}
							}}
							type="submit"
							className="mt-auto bg-pink-500 hover:bg-black p-1.5 rounded text-white">
							{(savedTracks ?? []).some(
								(savedTrack) =>
									savedTrack.id === `${track.name}_${track.artistName}`,
							)
								? onlyShowSaved
									? 'Remove Track'
									: 'Track Saved'
								: 'Save Track'}
						</button>
					</div>
				))}
		</div>
	);
};

export default Tiles;
