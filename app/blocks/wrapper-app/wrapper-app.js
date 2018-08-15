import React from 'react'; // eslint-disable-line no-unused-vars
import {render}from 'react-dom';
import {Provider}from 'react-redux';
import {createStore, applyMiddleware}from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {Router, Route, hashHistory}from 'react-router';
import {syncHistoryWithStore}from 'react-router-redux';

import App from '../app/App';
import About from '../about/About';
import Track from '../track/Track';

import reducer from '../reducers/index';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line no-underscore-dangle
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

const dv = console.log.bind(console);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route
				component={App}
				dv={dv}
				path='/'
			/>
			<Route component={About} path='/about' />
			<Route component={Track} path='/tracks/:id' />
		</Router>
	</Provider>,
	document.querySelector('.wrapper-app')
);

/*
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
*/
