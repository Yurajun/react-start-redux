const initialState = [{
	id: 1234,
	name: 'My super track',
}];

export default function playList(state = initialState, action){
	if (action.type === 'ADD_TRACK'){
		// console.log('add_track');
		console.log(action.payload);
		return [
			...state,
			action.payload,
		];
	}else if (action.type === 'DELETE_TRACK'){
		return state.filter(obj => obj.id !== action.payload);
	}else if (action.type === 'CHANGE_TRACK'){
		const newState = state.map(obj => {
			if (obj.id === action.track.id){
				obj.name = action.track.name;
			}
			return obj;
		});
		return newState;
		// const newState = state.filter(obj => obj.id !== action.track.id);
		// return [
		// 	...newState,
		// 	action.track,
		// ];
	}else if (action.type === 'FETCH_TRACKS_SUCCESS'){
		return action.payload;
	}
	return state;
}
