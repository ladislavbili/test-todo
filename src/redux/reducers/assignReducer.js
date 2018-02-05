import { START_LOADING_ASSIGNED, SET_ASSIGNED } from "../types";
const initialState = {
  assigned: [],
  assignedLoaded: false
};

export default function assignReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_ASSIGNED:
      return { ...state, assignedLoaded: false };
    case SET_ASSIGNED:
      return {
        ...state,
        assigned: action.assigned,
        assignedLoaded: true
      };
    default:
      return state;
  }
}
