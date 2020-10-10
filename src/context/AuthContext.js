import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signin = async (email, password) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
  } catch (error) {
    console.error(error.message);
  }
};
const signup = async (email, password) => {
  try {
    await trackerApi.post('/signup', { email, password });
  } catch (error) {
    console.error(error.message);
  }
};
const signout = () => {};

const actions = { signin, signup, signout };
const initialState = { isSignedIn: false };

export const { Context, Provider } = createDataContext(reducer, actions, initialState);
