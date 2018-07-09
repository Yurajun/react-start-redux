// import React from 'react'; // eslint-disable-line no-unused-vars
// import {render}from 'react-dom';
// import App from '../app/App'; // eslint-disable-line no-unused-vars


// render(
// 	<App />,
// 	document.querySelector('.wrapper-app')
// );

import {createStore}from 'redux';

function playList(state = [], action){
	if (action.type === 'ADD_TRACK'){
		return [
			...state,
			action.payload,
		];
	}
	return state;
}

const store = createStore(playList);


store.subscribe(() => {
	console.log('subScribe', store.getState());
	const list = document.querySelector('.list');
	list.innerHTML = '';

	store.getState().forEach(track => {
		const li = document.createElement('li');
		li.textContent = track;
		list.append(li);
	});

});

// store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'});
// store.dispatch({type: 'ADD_TRACK', payload: 'Enter sendmen'});

const addTrackBtn = document.querySelector('.addTrack');
addTrackBtn.addEventListener('click', () => {
	const trackName = document.querySelector('.trackInput');
	store.dispatch({type: 'ADD_TRACK', payload: trackName.value});
	trackName.value = '';
});
