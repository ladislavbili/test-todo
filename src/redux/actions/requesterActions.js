import { START_LOADING_REQUESTERS, SET_REQUESTERS } from "../types";

const URL = "http://localhost:3001/users";

export const startLoadingRequesters = () => {
  return dispatch => {
    dispatch({ type: START_LOADING_REQUESTERS });
  };
};

export const getRequesters = () => {
  return dispatch => {
    fetch(URL, { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: SET_REQUESTERS, requesters: decodedResponse });
            })
            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};
