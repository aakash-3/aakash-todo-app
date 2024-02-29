import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Store,
  AnyAction,
} from "redux";

import thunk from "redux-thunk";
import { AppState, DispatchActionType } from "../type";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import todoReducer from "./Reducers/todoReducer/todoReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const todoPersistConfig = {
  key: "todoState",
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers<AppState>({
  todoReducer: persistReducer(
    todoPersistConfig,
    todoReducer
  ) as typeof todoReducer,
});

export const store: Store<AppState, AnyAction> & {
  dispatch: DispatchActionType;
} = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
