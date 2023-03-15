import { delay, put, select, takeLatest } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import * as actions from "../reducers";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer({ payload }) {
  const customerId = payload;

  try {
    const customers = yield select((state) => state.customer.list.customers);
    const fields = yield select((state) => state.customer.form.fields);

    // pretend call to API
    yield delay(500);

    const result = customers.map((customer) =>
      customer.id === customerId ? fields : customer
    );

    yield set("CUSTOMERS_KEY", result);
    yield put(actions.editCustomerResult(result));

    alert("Edited");
  } catch (error) {
    console.log(error);
    yield put(actions.editCustomerError(error.toString()));
    alert("Error");
  }
}
