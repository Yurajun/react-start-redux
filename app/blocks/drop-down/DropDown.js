import React from 'react';
import {compose, withState, withHandlers}from 'recompose';
import PropTypes from 'prop-types';

const DropDown = ({isOpened, onClick, onMouseOver, onMouseOut}) => {
	let dropDownText;
	if (isOpened){
		dropDownText = <div>Here is what is shown is dropdown</div>;
	}
	return (
		<div
			onClick={onClick}
			onMouseOut={onMouseOut}
			onMouseOver={onMouseOver}
		>
			its drop down bebe
			{dropDownText}
		</div>
	);
};

DropDown.propTypes = {
	isOpened: PropTypes.bool,
	onClick: PropTypes.func,
	onMouseOut: PropTypes.func,
	onMouseOver: PropTypes.func,
};

export default compose(
	withState('isOpened', 'toggleVisible', false),
	withHandlers({
		onClick: ({toggleVisible}) => () => {
			toggleVisible(isOpened => {
				if (isOpened) {
					isOpened = false;
				}else {
					isOpened = true;
				}
				return isOpened;
			});
		},
		onMouseOver: ({toggleVisible}) => () => {
			toggleVisible(isOpened => {
				isOpened = true;
				return isOpened;
			});
		},
		onMouseOut: ({toggleVisible}) => () => {
			toggleVisible(isOpened => {
				isOpened = false;
				return isOpened;
			});
		},
	})
)(DropDown);
