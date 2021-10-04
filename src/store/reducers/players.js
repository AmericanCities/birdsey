const INITIAL_STATE = {
    activeJersey:[16,6,86],
    players:[
        {   id: 16,
            playerName: "Quez Watkins",
            position: "WR",
            number: 16,
        },
        {   id: 6,
            playerName: "Devonte Smith",
            position: "WR",
            number: 6 
        },
        {   id: 86,
            playerName: "Zach Ertz",
            position: "TE",
            number: 86 
        },
    ]
}

const players = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_PLAYER': {
            const newPlayer = action.payload;
            const newActiveJersey = [...state.activeJersey, action.payload.number];
            const updatedPlayers = [...state.players, newPlayer];
            const updatedState = {...state, activeJersey: newActiveJersey, players: updatedPlayers};
            return updatedState;
        }
        default: {
            return state;
        }
    }
}

export default players;