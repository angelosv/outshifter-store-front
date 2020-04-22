import React from 'react';
import { injectIntl } from 'react-intl';
import { CustomInput } from 'reactstrap';

const FormikSingleCheckbox = ({
  name, onChange, onBlur, value, disabled, label, intl,
}) => {
  const messageLabel = intl.formatMessage({ id: label });
  const handleChange = () => onChange(name, !value);
  const handleBlur = () => onBlur(name, true);
  return (
    <div
      className="position-relative form-check form-check-inline"
    >
      <CustomInput
        name={name}
        id={`checkbox-${name}`}
        type="checkbox"
        className="form-check-input"
        onChange={handleChange}
        onBlur={handleBlur}
        checked={value}
        disabled={disabled}
      />
      <label htmlFor={`checkbox-${name}`} className="form-check-label">
        {messageLabel}
      </label>
    </div>
  );
};

export default injectIntl(FormikSingleCheckbox);
