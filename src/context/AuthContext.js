import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signin = () => {};
const signup = () => {};
const signout = () => {};

const actions = { signin, signup, signout };
const initialState = { isSignedIn: false };

export const { Context, Provider } = createDataContext(reducer, actions, initialState);
