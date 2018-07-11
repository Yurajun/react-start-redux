import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class App extends Component {

	static PropTypes = {
		tracks: PropTypes.array.isRequired,
		onAddTrack: PropTypes.func,
	};

	addTrack() {
		const props = this.props;
		console.log('addTrack', this.trackInput.value);
		props.onAddTrack(this.trackInput.value);
		this.trackInput.value = '';
	}

	render() {
		const props = this.props;
		props.dv('this.props', props);
		return (
			<div className='container'>
				<input ref={input => {this.trackInput = input;}} type='text' />
				<button onClick={this.addTrack.bind(this)}>Add Track</button>
				<ul>
					{
						props.tracks.map((track, index) =>
							<li key={index}>{track}</li>
						)
					}
				</ul>
			</div>
		);
	}

}

export default connect(
	state => ({
		tracks: state.tracks,
	}),
	dispatch => ({
		onAddTrack: trackName => {
			dispatch({type: 'ADD_TRACK', payload: trackName});
		},
		deleteTreck: trackName => {
			dispatch({type: 'DELETE_TRACK', payload: trackName});
		},
	}),
)(App);

// react/jsx-no-bind: 2
