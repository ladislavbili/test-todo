import { START_LOADING_STATUSES, SET_STATUSES } from "../types";

const URL = "http://localhost:3000/statuses";

export const startLoadingStatuses = () => {
  return dispatch => {
    dispatch({ type: START_LOADING_STATUSES });
  };
};

export const getStatuses = () => {
  return dispatch => {
    fetch(URL, { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: SET_STATUSES, statuses: decodedResponse });
            })
            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};
