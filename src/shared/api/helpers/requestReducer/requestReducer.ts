import { Action } from "./requestActions";
import { InitialState } from "./requestStates";

export function requestReducer<T>(state = InitialState, action: Action<T>) {
  switch (action.type) {
    case "Loaded":
      return {
        isLoaded: true,
        isLoading: false,
        data: action.data,
      };
    case "Loading":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
