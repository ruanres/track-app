import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const ADD_ERROR = 'ADD_ERROR';
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signin = (dispatch) => async (email, password) => {
  try {
    await trackerApi.post('/signin', { email, password });
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign in' });
  }
};
const signup = (dispatch) => async (email, password) => {
  try {
    await trackerApi.post('/signup', { email, password });
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign up' });
  }
};

const signout = () => {};

const actions = { signin, signup, signout };
const initialState = { isSignedIn: false, errorMessage: '' };

export const { Context, Provider } = createDataContext(reducer, actions, initialState);
