import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";
import { states } from "../../utilities/helpers.js";
import { useEffect } from "react";

export const useCustomerFormFields = (customerId = null) => {
  const { PENDING, SUCCESS } = states;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    const clearPreviousSuccess = () => {
      if (customerId && status === SUCCESS) {
        dispatch(actions.clearPreviousEditedForm());
      }
    };

    const fillEditInformation = () => {
      if (customerId && status === PENDING) {
        dispatch(actions.editCustomerStatus(customerId));
        dispatch(actions.setForm(customerId));
      }
    };

    const clearForm = () => {
      if (!customerId) {
        dispatch(actions.clearPreviousEditedForm());
      }
    };

    clearPreviousSuccess();
    fillEditInformation();
    clearForm();
  }, [customerId, status, dispatch]);

  return {
    fields,
    setFormField: (field, value) => {
      return dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      dispatch(actions.createCustomer());
    },
  };
};

export const useNewCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useEditCustomerFields = () => {
  return useSelector((state) => state.customer.edit.editingFields);
};

export const useEditCustomer = (customerId) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      dispatch(actions.editCustomer(customerId));
    },
  };
};

export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers);
};
