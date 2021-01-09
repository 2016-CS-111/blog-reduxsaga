
const postsReducer = (state={}, action) => {
    switch (action.type) {
        // case 'GET_POSTS':
        case 'GET_POSTS':
            // console.log('GET_POSTS')
            return {...state, posts: action.posts};
            
        case 'GET_POSTS_REQUESTED':
            // console.log('GET_POSTS_REQUESTED')
            return state

        default:
            // console.log('default')

            return state;
    }
};

export default postsReducer;