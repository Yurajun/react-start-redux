import {combineReducers}from 'redux';

import tracks from './tracks';
import playlists from './playlist';

export default combineReducers({
	tracks,
	playlists,
});

