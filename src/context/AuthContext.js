import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const ADD_ERROR = 'ADD_ERROR';
const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';

const initialState = { isSignedIn: false, errorMessage: '', token: '' };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SIGNIN:
    case SIGNUP:
      return {
        ...state,
        errorMessage: '',
        isSignedIn: true,
        token: payload,
      };
    case ADD_ERROR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

const saveToken = async (token) => {
  await AsyncStorage.setItem('token', token);
};

const signin = (dispatch) => async (email, password) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    const { token } = response.data;
    dispatch({ type: SIGNIN, payload: token });
    await saveToken(token);
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign in' });
  }
};

const signup = (dispatch) => async (email, password) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    const { token } = response.data;
    dispatch({ type: SIGNUP, payload: token });
    await saveToken(token);
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign up' });
  }
};

const signout = () => {};

const actions = { signin, signup, signout };

export const { Context, Provider } = createDataContext(reducer, actions, initialState);
