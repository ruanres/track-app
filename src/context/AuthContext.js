import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const ADD_ERROR = 'ADD_ERROR';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

const reducer = (state, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        errorMessage: '',
      };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signin = (dispatch) => async (email, password) => {
  try {
    await trackerApi.post('/signin', { email, password });
    dispatch({ type: SIGNIN_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign in' });
  }
};
const signup = (dispatch) => async (email, password) => {
  try {
    await trackerApi.post('/signup', { email, password });
    dispatch({ type: SIGNUP_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign up' });
  }
};

const signout = () => {};

const actions = { signin, signup, signout };
const initialState = { isSignedIn: false, errorMessage: '' };

export const { Context, Provider } = createDataContext(reducer, actions, initialState);
