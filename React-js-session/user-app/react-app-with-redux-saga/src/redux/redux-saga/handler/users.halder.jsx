import { call, put } from "redux-saga/effects";
import {
  getPostByUserIdService,
  getUserService,
} from "../service/user.service";
import { saveUsers } from "../../users.slice";
import { setUserError } from "../../error.slice";

export function* getUserHandler() {
  try {
    let { data } = yield call(getUserService);
    yield put(saveUsers(data));
  } catch (error) {
    yield put(setUserError("Server Error, Try Again"));
  }
}

export function* getPostByUserIdHandler(action) {
  let userId = action.payload;
  console.log(userId);
  try {
    let { data } = yield call(getPostByUserIdService, userId);
    console.log(data);
    //yield put(saveUsers(data));
  } catch (error) {
    yield put(setUserError("Server Error, Try Again"));
  }
}
