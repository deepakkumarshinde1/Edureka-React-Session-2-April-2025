import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./users.slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux-saga/rootSaga";
import ErrorSlice from "./error.slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: UsersSlice.reducer,
    errors: ErrorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
