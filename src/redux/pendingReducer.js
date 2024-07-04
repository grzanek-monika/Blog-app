// selectors
export const getPending = (state => state.pending);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_PENDING  = createActionName('UPDATE_PENDING');


// action creators
const pendingReducer = (statePart=[], action) => {
    switch(action.type){
        case UPDATE_PENDING:
            return action.payload;
        default:
            return statePart;
    }
}

export const updatePending = payload => ({ type: UPDATE_PENDING, payload });

export default pendingReducer;