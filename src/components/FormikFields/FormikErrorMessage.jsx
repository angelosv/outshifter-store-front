import React from 'react';
import { ErrorMessage } from 'formik';

const FormikErrorMessage = ({ name }) => (
  <ErrorMessage name={name}>
    { msg => (
      <div className="invalid-feedback d-block">
        {msg}
      </div>
    )}
  </ErrorMessage>
);

export default FormikErrorMessage;
