const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SETCURRENTUSERDATA':
            return state = action.value;
        default:
            return state
    }
};

export default currentUserReducer;
