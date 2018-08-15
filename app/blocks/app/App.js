/* global $ */
import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

import {Link}from 'react-router';

import {getTracks}from '../actions/tracks';

import Menu from '../menu/Menu';

class App extends Component {
	static PropTypes = {
		tracks: PropTypes.array.isRequired,
		onAddTrack: PropTypes.func,
		onFindTrack: PropTypes.func,
		onDeleteTreck: PropTypes.func,
	};

	constructor() {
		super();
		this.state = {track: {id: '', name: ''}};
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

	openPopup(track) {
		const inst = $('[data-remodal-id=modal]').remodal();
		inst.open();
		this.setState({track: {id: track.id, name: track.name}});
	}

	handleChange(event) {
		const track = this.state.track;
		this.setState({track: {id: track.id, name: event.target.value}});
	}

	saveNewTrackName() {
		const props = this.props;
		const track = this.state.track;
		props.onChangeTrack(track);
	}

	render() {
		const props = this.props;
		console.log('props ', props);
		return (
			<div className='container'>
				<Menu />
				<div>
					<input ref={input => {this.trackInput = input;}} type='text' />
					<button onClick={this.addTrack.bind(this)}>Add Track</button>
				</div>
				<div>
					<input ref={input => {this.searchInput = input;}} type='text' />
					<button onClick={this.findTrack.bind(this)}>Find Track</button>
				</div>
				<div>
					<button onClick={props.onGetTracks}>Get traks</button>
				</div>
				<ul>
					{
						props.tracks.map((track, index) =>
							(
								<li key={index}>
									<Link to={`/tracks/${track.id}`}>{track.name}</Link>
									<span className='delete-button' onClick={() => this.deleteTreck(track.id)} > <button>X</button></span>
									<button onClick={() => this.openPopup(track)} >редактировать</button>

								</li>
							)
						)
					}
				</ul>
				<div
					className='remodal'
					data-remodal-id='modal'
					data-remodal-options='hashTracking: false'
				>
					<button className='remodal-close' data-remodal-action='close' >X</button>
					<p>Отредактируй и сохрани</p>
					<input
						onChange={e => {this.handleChange(e);}}
						type='text'
						value={this.state.track.name}
					/>
					<button
						className='remodal-confirm'
						data-remodal-action='confirm'
						onClick={this.saveNewTrackName.bind(this)}
					>OK</button>
				</div>
			</div>
		);
	}

}

export default connect(
	(state, ownProps) => ({
		tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
		ownProps,
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
		onChangeTrack: track => {
			dispatch({type: 'CHANGE_TRACK', track});
		},
		onGetTracks: () => {
			dispatch(getTracks());
		},
	}),
)(App);

// <Popup track={this.state.track} />
// react/jsx-no-bind: 2
