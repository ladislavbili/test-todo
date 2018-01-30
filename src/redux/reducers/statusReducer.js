import { START_LOADING_STATUSES, SET_STATUSES } from "../types";
const initialState = {
  statuses: [],
  statusesLoaded: false
};

export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_STATUSES:
      return { ...state, statusesLoaded: false };
    case SET_STATUSES:
      return { ...state, statuses: action.statuses, statusesLoaded: true };
    default:
      return state;
  }
}
