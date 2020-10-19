
const initialState = {
    email: 'isaac.acz@gmail.com',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMAIL': 
            return {...state, email: action.payload.email };
        
        default:
            console.log('ERRO: In Action of Reducers')
    }

    return state;
}