import React from 'react';
import Select from 'react-select';

const FormikReactSelect = ({
  name,
  onChange,
  onBlur,
  className,
  options,
  isMulti,
  value,
  disabled = false,
  styles = {},
  placeholder,
  ...props
}) => {
  const handleChange = val => onChange(name, val);

  const handleBlur = () => onBlur(name, true);

  return (
    <Select
      className={`react-select ${className}`}
      classNamePrefix="react-select"
      options={options}
      isMulti={isMulti}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      isDisabled={disabled}
      styles={styles}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default FormikReactSelect;
