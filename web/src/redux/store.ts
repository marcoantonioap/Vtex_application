import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthReducer } from "./AuthStore";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({ AuthReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware))
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;

export default { store, persistor };
