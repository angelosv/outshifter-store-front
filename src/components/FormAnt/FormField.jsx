import React from 'react';
import { Field } from 'formik';
import {
  FormGroup, Label,
} from 'reactstrap';
import classnames from 'classnames';
import FormikErrorMessage from './FormikErrorMessage';

const FormField = ({
  className,
  pushTooltip = 100,
  tooltipPosition = 'tooltip-label-right',
  label,
  labelStyle,
  name,
  inputStyle,
  suffix,
  disabled = false,
  ...props
}) => (
  <FormGroup className={classnames(`error-l-${pushTooltip}`, tooltipPosition, className)}>
    { label && (
      <Label style={labelStyle}>
      </Label>
    )}
    <Field
      className="form-control"
      name={name}
      style={{ ...inputStyle }}
      disabled={disabled}
      {...props}
    />
    <FormikErrorMessage name={name} />
    { suffix && (
      <span className="form-control-suffix">{suffix}</span>
    )}
  </FormGroup>
);

export default FormField;
