import { START_LOADING_TAGS, SET_TAGS } from "../types";
const initialState = {
  tags: [],
  tagsLoaded: false
};

export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_TAGS:
      return { ...state, tagsLoaded: false };
    case SET_TAGS:
      return { ...state, tags: action.tags, tagsLoaded: true };
    default:
      return state;
  }
}
