let initialState = {
    mode: 'light'
}

const sampleReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_SWITCH':
            console.log("in toggle switch");
            return {
                ...state,
                mode: !state.mode
            }
        default :
            return state;
    }
}

export default sampleReducer;