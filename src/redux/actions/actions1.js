import {
  START_LOADING_TODOS,
  SET_TODOS,
  ADD_TODO,
  START_LOADING_TODO,
  SET_TODO,
  EDIT_TODO
} from "../types";

const URL = "http://localhost:3000/todos";

export const startLoadingTodos = () => {
  return dispatch => {
    dispatch({ type: START_LOADING_TODOS });
  };
};

export const getTodos = () => {
  return dispatch => {
    fetch(URL, { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: SET_TODOS, newTodos: decodedResponse });
            })
            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};

export const startLoadingTodo = () => {
  return dispatch => {
    dispatch({ type: START_LOADING_TODO });
  };
};

export const getTodo = id => {
  return dispatch => {
    fetch(URL + "/" + id, { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: SET_TODO, todo: decodedResponse });
            })
            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};

export const addTodo = todo => {
  return dispatch => {
    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: ADD_TODO, newTodo: decodedResponse });
            })
            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};

export const editTodo = (todo, id) => {
  return dispatch => {
    fetch(URL + "/" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: EDIT_TODO, newTodo: decodedResponse });
            })
            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};
