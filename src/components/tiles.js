import { useContext, useEffect, useState } from 'react';
import { getTopTracks } from '../utils';
import { AppContext } from '../AppContext';

const Tiles = ({ onlyShowSaved = false }) => {
	const { savedTracks, setSavedTracks } = useContext(AppContext);
	const [tracks, setTracks] = useState();

	useEffect(() => {
		async function fetchData() {
			if (onlyShowSaved === false) {
				const topTracks = await getTopTracks();
				console.log(topTracks);
				setTracks(topTracks);
			} else {
				setTracks(savedTracks);
			}
		}
		fetchData();
	}, [onlyShowSaved, savedTracks]);

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
									setTracks(newSavedTracks);
								} else {
									const currentTracks = savedTracks ?? [];
									track.id = `${track.name}_${track.artistName}`;
									console.log(track);
									setSavedTracks([...currentTracks, track]);
									console.log(savedTracks);
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
