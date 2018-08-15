import React from 'react';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';

import Menu from '../menu/Menu';

const Track = ({track}) => {
	return (
		<div className='wrapper-track__box'>
			<Menu />
			<div>{track.name}</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log('ownProps ', ownProps);
	return {
		track: state.tracks.find(track => track.id === parseInt(ownProps.params.id, 10)),
	};
};

Track.propTypes = {
	track: PropTypes.object,
};
export default connect(mapStateToProps)(Track);
