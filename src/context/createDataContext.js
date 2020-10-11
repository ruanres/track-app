import React, { createContext, useReducer } from 'react';
// func, obj, obj
export default (reducer, actions, initialValue) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const boundActions = Object.entries(actions)
      .reduce((updatedActions, [name, action]) => (
        { ...updatedActions, [name]: action(dispatch) }
      ), {});

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
