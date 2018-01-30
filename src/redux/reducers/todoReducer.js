import {
  START_LOADING_TODOS,
  SET_TODOS,
  ADD_TODO,
  SET_TODO,
  START_LOADING_TODO,
  EDIT_TODO
} from "../types";
const initialState = {
  todos: [],
  loadingTodos: true,
  todo: null,
  loadedTodo: false
};

export default function firstReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_TODOS:
      return { ...state, loadingTodos: true };
    case START_LOADING_TODO:
      return { ...state, loadedTodo: false };
    case SET_TODOS:
      return { ...state, todos: action.newTodos, loadingTodos: false };
    case SET_TODO:
      return { ...state, todo: action.todo, loadedTodo: true };
    case ADD_TODO:
      return { ...state, todos: [action.newTodo, ...state.todos] };
    case EDIT_TODO: {
      let newTodos = [...state.todos];
      newTodos[newTodos.findIndex(todo => todo.id === action.newTodo.id)] =
        action.newTodo;
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
}
