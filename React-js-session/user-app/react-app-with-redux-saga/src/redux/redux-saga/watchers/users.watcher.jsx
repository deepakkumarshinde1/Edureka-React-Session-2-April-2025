import { takeLatest } from "redux-saga/effects";
import { getPostListByUserId, getUsers } from "../../users.slice";
import {
  getPostByUserIdHandler,
  getUserHandler,
} from "../handler/users.halder";

export function* getUserWatcher() {
  console.log("getUserWatcher");
  yield takeLatest(getUsers.type, getUserHandler);
}

export function* getPostByUserIdWatcher() {
  yield takeLatest(getPostListByUserId.type, getPostByUserIdHandler);
}
