export type User = {
    id: number,
    username: string
}

type UserTypes = 
    |   { type: 'auth - login', payload: User }
    |   { type: 'auth - logout', payload : User };



const userReducer = (state: User, action: UserTypes) => {
    switch (action.type){
        case 'auth - login':
            return {
                id: action.payload.id,
                username: action.payload.username
            }
        case 'auth - logout':
            return {
                id: 0,
                username: ''
            }
        default:
            return state;
    }
}

export default userReducer;
