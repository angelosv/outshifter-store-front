import React from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const FormikTagsInput = ({
  name, value, onBlur, onChange,
}) => {
  const handleChange = (val) => {
    onBlur(name, true);
    onChange(name, val);
  };

  return (
    <TagsInput
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FormikTagsInput;
