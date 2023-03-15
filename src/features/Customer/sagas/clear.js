import { delay, takeLatest } from "redux-saga/effects";
import { clear } from "../../../utilities/async_storage";
import * as actions from "../reducers";

export function* watchClearStorage() {
  yield takeLatest(actions.clearStorage.toString(), takeClearStorage);
}

export function* takeClearStorage() {
  try {
    // pretend call to API
    yield delay(500);

    yield clear();
    alert("Cleared");
  } catch (error) {
    console.log(error);
    alert("Error");
  }
}
