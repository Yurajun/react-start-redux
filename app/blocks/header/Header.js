import React, {Component}from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

	static PropTypes = {
		items: PropTypes.array.isRequired
	};

	render() {
		const props = this.props;
		return (
			<div>
				<div>
					{
						props.items.map((item, index) =>
							<a href={item.link} key={index}> {item.label} </a>
						)
					}
				</div>
			</div>
		);
	}
}

