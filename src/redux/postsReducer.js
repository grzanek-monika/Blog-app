import { nanoid } from "nanoid";
import { API_URL } from "../config";
import { updatePending } from "./pendingReducer";

//selectors
export const getAllPosts = (state => state.posts);
export const getPostById = ({posts}, id) => posts.find(post => post.id === id);
export const getPostByCategory = ({posts}, category) => posts.filter(post => post.category === category);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const UPDATE_POSTS= createActionName('UPDATE_POSTS');

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return  [...action.payload];
    case REMOVE_POST: 
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST: 
      return [...statePart, {id: nanoid(), ...action.payload }];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export const updatePosts = payload => ({ type: UPDATE_POSTS, payload });
export const removePost = payload => ({ type: REMOVE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(updatePending(true));
    fetch(`${API_URL}/posts`)
      .then(res => res.json())
      .then(posts => {
        dispatch(updatePosts(posts));
        dispatch(updatePending(false));
      });
  }
}

export const addPostRequest = (newPost) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
    };
    fetch(`${API_URL}/posts`, options)
      .then(() => dispatch(addPost(newPost)));

  }
}

export const editPostRequest = (newPost) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }
    fetch(`${API_URL}/posts/${newPost.id}`, options)
      .then(() => dispatch(editPost(newPost)));
  }
}

export const removePostRequest = (postToRemove) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`${API_URL}/posts/${postToRemove}`, options)
      .then(() => dispatch(removePost(postToRemove))); 
  }
}

export default postsReducer;