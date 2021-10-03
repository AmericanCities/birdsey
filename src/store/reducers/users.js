const INITIAL_STATE = {
    items:[]
}

const users = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SUCCESS': {
            return true;
        }
        default: {
            return state;
        }
    }
}

export default users;