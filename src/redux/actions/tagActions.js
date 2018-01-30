import { START_LOADING_TAGS, SET_TAGS } from "../types";

const URL = "http://localhost:3000/tags";

export const startLoadingTags = () => {
  return dispatch => {
    dispatch({ type: START_LOADING_TAGS });
  };
};

export const getTags = () => {
  return dispatch => {
    fetch(URL, { method: "GET" })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedResponse => {
              dispatch({ type: SET_TAGS, tags: decodedResponse });
            })
            .catch(error => console.log(error));
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(error => console.log(error));
  };
};
