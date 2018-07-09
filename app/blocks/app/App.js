import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class App extends Component {

	static PropTypes = {
		testStore: PropTypes.array.isRequired,
	};

	render() {
		const props = this.props;
		// console.log('this.props', props.testStore);
		return (
			<div className='container'>
				<input type='text' />
				<button>Add Track</button>
				<ul>
					{
						props.testStore.map((track, index) =>
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
		testStore: state,
	}),
	dispatch => ({}),
)(App);
