/// <reference types="redux-persist" />

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { todoStateType } from "./types/todoTypes";

interface AppState {
  todoReducer: todoStateType;
}
export interface ActionType {
  type: string;
  payload: any;
}

export type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;

type DispatchActionType = (arg0: ActionType) => void;

declare module "redux-persist/lib/storage";
declare module "redux-persist/lib/persistReducer";

declare module "redux-persist/integration/react";
declare module "redux-persist/lib/persistStore";
