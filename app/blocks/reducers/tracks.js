const initialState = [];

export default function playList(state = initialState, action){
	if (action.type === 'ADD_TRACK'){
		// console.log('add_track');
		return [
			...state,
			action.payload,
		];
	}else if (action.type === 'DELETE_TRACK'){
		return state.filter(obj => obj.id !== action.payload);
	}
	return state;
}
