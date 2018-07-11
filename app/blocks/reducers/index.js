import {combineReducers}from 'redux';

import tracks from './tracks';
import playlists from './playlist';
import filterTracks from './filterTracks';

export default combineReducers({
	tracks,
	playlists,
	filterTracks,
});

