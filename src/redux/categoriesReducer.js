import { API_URL } from "../config";

// selectors
export const getAllCategories = (state => state.categories);

// actions
const createActionName = actionName => `app/categories/${actionName}`;
const UPDATE_CATEGORIES = createActionName('UPDATE_CATEGORIES');

// action creators
const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return  [...action.payload];
        default:
        return statePart;
    };  
}

export const updateCategories = payload => ({ type: UPDATE_CATEGORIES, payload });
export const fetchCategories = () => {
    return (dispatch) => {
        fetch(`${API_URL}/categories`)
            .then(res => res.json())
            .then(categories => dispatch(updateCategories(categories)))
    }
}



export default categoriesReducer;

