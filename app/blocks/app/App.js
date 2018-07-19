/* global $ */
import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

import Popup from '../popup/Popup';

class App extends Component {
	static PropTypes = {
		tracks: PropTypes.array.isRequired,
		onAddTrack: PropTypes.func,
		onFindTrack: PropTypes.func,
		onDeleteTreck: PropTypes.func,
	};

	constructor() {
		super();
		this.state = {track: {}};
	}

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

	change(track) {
		const inst = $('[data-remodal-id=modal]').remodal();
		inst.open();
		this.setState({track});
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
									<span className='delete-button' onClick={() => this.deleteTreck(track.id)} > <button>X</button></span>
									<button onClick={() => this.change(track)} >редактировать</button>

								</li>
							)
						)
					}
				</ul>
				<Popup track={this.state.track} />
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
		// onChangeTrack: trackId => {
		// 	dispatch({type: 'CANGE_TRACK', payload: trackId});
		// },
	}),
)(App);

// react/jsx-no-bind: 2
