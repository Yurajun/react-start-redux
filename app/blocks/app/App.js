import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class App extends Component {

	static PropTypes = {
		tracks: PropTypes.array.isRequired,
		onAddTrack: PropTypes.func,
		onFindTrack: PropTypes.func,
	};

	addTrack() {
		const props = this.props;
		console.log('addTrack', this.trackInput.value);
		props.onAddTrack(this.trackInput.value);
		this.trackInput.value = '';
	}

	findTrack() {
		const props = this.props;
		console.log('findTrack', this.searchInput.value);
		props.onFindTrack(this.searchInput.value);
	}

	render() {
		const props = this.props;
		props.dv('this.props', props);
		return (
			<div className='container'>
				<div>
					<input ref={input => {this.trackInput = input;}} type='text' />
					<button onClick={this.addTrack.bind(this)}>Add Track</button>
				</div>
				<div>
					<input ref={input => {this.searchInput = input;}} type='text' />
					<button onClick={this.findTrack.bind(this)}>Find Track</button>
				</div>
				<ul>
					{
						props.tracks.map((track, index) =>
							<li key={index}>{track.name}</li>
						)
					}
				</ul>
			</div>
		);
	}

}

export default connect(
	state => ({
		tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
	}),
	dispatch => ({
		onAddTrack: name => {
			const payload = {
				id: Date.now().toString(),
				name,
			};
			console.log('pl', payload);
			dispatch({type: 'ADD_TRACK', payload});
		},
		deleteTreck: trackName => {
			dispatch({type: 'DELETE_TRACK', payload: trackName});
		},
		onFindTrack: name => {
			dispatch({type: 'FIND_TRACK', payload: name});
		},
	}),
)(App);

// react/jsx-no-bind: 2
