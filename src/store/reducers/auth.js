
const INITIAL_STATE = {
    isAuthenticated: false, 
}

const auth= (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN': {
            return {...state, isAuthenticated: true};     
        }
        case 'LOGOUT': {
            return {...state, isAuthenticated: false};
        }
        default: {
            return state;
        }
    }
}

export default auth;