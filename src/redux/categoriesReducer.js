import { API_URL } from "../config";
import { nanoid } from "nanoid";

// selectors
export const getAllCategories = (state => state.categories);

// actions
const createActionName = actionName => `app/categories/${actionName}`;
const UPDATE_CATEGORIES = createActionName('UPDATE_CATEGORIES');
const ADD_CATEGORY = createActionName('ADD_CATEGORY');

// action creators
const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return  [...action.payload];
        case ADD_CATEGORY:
            return [...statePart, action.payload];
        default:
        return statePart;
    };  
}

export const updateCategories = payload => ({ type: UPDATE_CATEGORIES, payload });
export const addCategory = payload => ({ type: ADD_CATEGORY, payload });
export const fetchCategories = () => {
    return (dispatch) => {
        fetch(`${API_URL}/categories`)
            .then(res => res.json())
            .then(categories => dispatch(updateCategories(categories)))
    }
}

export const addCategoryRequest = (newCategory) => {
    return (dispatch) => {
        const options = {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newCategory)
          };
        fetch(`${API_URL}/categories`, options)
            .then(() => {
                dispatch(addCategory(newCategory))
                console.log('category', newCategory)});
    }
}






export default categoriesReducer;

