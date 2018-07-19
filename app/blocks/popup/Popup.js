import React, {Component}from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

class Popup extends Component {

	static PropTypes = {
		tracks: PropTypes.array.isRequired,
		onSave: PropTypes.func,
		track: PropTypes.array.isRequired,
	};

	constructor(props) {
		super(props);
		console.log('prr ', props);
		this.state = {track: ''};
	}

	componentDidMount() {
		// const props = this.props;
		// this.setState({track: props});
	}

	trackName() {
		console.log('tr', this.props);
	}

	render() {
		const props = this.props;
		// console.log('pupup props: ', props);
		console.log('this.state ', this.state);

		return (
			<div
				className='remodal'
				data-remodal-id='modal'
				data-remodal-options='hashTracking: false'
			>
				<button className='remodal-close' data-remodal-action='close' >X</button>
				<p>Отредактируй и сохрани</p>
				<input
					ref={input => {this.trackNmae = input;}}
					type='text'
					value={props.track.name}
				/>
				<button className='remodal-confirm' data-remodal-action='confirm'>OK</button>
			</div>
		);
	}
}

export default connect(

	state => ({
		tracks: state.tracks,
	}),
	dispatch => ({
		onSave: name => {
			dispatch({type: 'SAVE_TRACK', payload: name});
		},
	}),

)(Popup);
