import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class App extends Component {

	static PropTypes = {
		tracks: PropTypes.array.isRequired,
		onAddTrack: PropTypes.func,
		onFindTrack: PropTypes.func,
		onDeleteTreck: PropTypes.func,
	};

	addTrack() {
		const props = this.props;
		props.onAddTrack(this.trackInput.value);
		this.trackInput.value = '';
	}

	findTrack() {
		const props = this.props;
		props.onFindTrack(this.searchInput.value);
	}

	deleteTreck(id) {
		const props = this.props;
		props.onDeleteTreck(id);
	}

	render() {
		const props = this.props;
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
							(
								<li key={index}>
									{track.name}
									<span className='delete-button' onClick={() => this.deleteTreck(track.id)} > X</span>
								</li>
							)
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
			dispatch({type: 'ADD_TRACK', payload});
		},
		onDeleteTreck: trackId => {
			dispatch({type: 'DELETE_TRACK', payload: trackId});
		},
		onFindTrack: name => {
			dispatch({type: 'FIND_TRACK', payload: name});
		},
	}),
)(App);

// react/jsx-no-bind: 2
