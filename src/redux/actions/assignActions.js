import { START_LOADING_ASSIGNED, SET_ASSIGNED } from "../types";

const URL = "http://localhost:3001/users";

export const startLoadingAssigned = () => {
  return dispatch => {
    dispatch({ type: START_LOADING_ASSIGNED });
  };
};

export const getAssigned = () => {
  return dispatch => {
    fetch(URL, { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: SET_ASSIGNED, assigned: decodedResponse });
            })

            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};
