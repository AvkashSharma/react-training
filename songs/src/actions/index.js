// action creator
export const selectSomg = (song) => {
	// Return an action
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};
