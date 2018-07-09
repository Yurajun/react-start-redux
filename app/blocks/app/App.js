import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class App extends Component {

	static PropTypes = {
		testStore: PropTypes.array.isRequired,
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
		console.log('this.props', props.testStore);
		return (
			<div />
		); // (
		// 	<div className='container'>
		// 		<input ref={input => {this.trackInput = input;}} type='text' />
		// 		// <button onClick={this.addTrack.bind(this)}>Add Track</button>
		// 		<ul>
		// 			{
		// 				props.testStore.map((track, index) =>
		// 					<li key={index}>{track}</li>
		// 				)
		// 			}
		// 		</ul>
		// 	</div>
		// );
	}

}

export default connect(
	state => ({
		testStore: state,
	}),
	dispatch => ({
		onAddTrack: trackName => {
			dispatch({type: 'ADD_TRACK', payload: trackName});
		},
	}),
)(App);
