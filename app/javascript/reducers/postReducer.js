export default function postReducer(state=[], action){
    switch(action.type){
        case 'ADD_POST':
            return [...state, action.post]
        case 'ADD_POSTS':
            return action.posts
        default:
            return state
    }
    
}