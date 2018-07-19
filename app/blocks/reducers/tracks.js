const initialState = [];

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
		const newState = state.filter(obj => obj.id !== action.track.id);
		return [
			...newState,
			action.track,
		];
	}
	return state;
}
