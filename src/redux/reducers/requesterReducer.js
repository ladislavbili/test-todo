import { START_LOADING_REQUESTERS, SET_REQUESTERS } from "../types";
const initialState = {
  requesters: [],
  requestersLoaded: false
};

export default function requesterReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_REQUESTERS:
      return { ...state, requestersLoaded: false };
    case SET_REQUESTERS:
      return {
        ...state,
        requesters: action.requesters,
        requestersLoaded: true
      };
    default:
      return state;
  }
}
