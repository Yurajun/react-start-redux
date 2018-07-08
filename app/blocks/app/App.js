import React, {Component}from 'react';
import Header from '../header/Header';
import DropDown from '../drop-down/DropDown';


const menu = [
	{
		link: '/articles',
		label: 'Articles'
	},
	{
		link: '/contents',
		label: 'Contents'
	},
	{
		link: '/posts',
		label: 'Posts'
	}
];


export default class App extends Component {

	submit() {
		console.log('submit', this.testInput);
	}

	render() {
		return (
			<div className='container'>
				<Header items={menu} />
				<div className='title-app'>Hello, world</div>
				<DropDown />
			</div>
		);
	}
}
