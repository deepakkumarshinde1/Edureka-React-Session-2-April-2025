import { all } from "redux-saga/effects";
import {
  getPostByUserIdWatcher,
  getUserWatcher,
} from "./watchers/users.watcher";

export default function* rootSaga() {
  console.log("rootSaga");
  let watchers = [getUserWatcher(), getPostByUserIdWatcher()];
  yield all(watchers);
}
