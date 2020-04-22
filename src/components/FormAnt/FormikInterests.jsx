import React from 'react';
import {
  FormGroup, Label,
} from 'reactstrap';
import IntlMessages from 'Util/IntlMessages';
import interests from 'Constants/interests.json';
import FormikReactSelect from './FormikReactSelect';
import FormikErrorMessage from './FormikErrorMessage';

const FormikInterests = ({
  className = 'error-l-100 tooltip-label-right',
  label,
  value,
  onChange,
  name,
  ...props
}) => (
  <FormGroup className={className}>
    <Label>
      <IntlMessages id={label} />
    </Label>
    <FormikReactSelect
      isMulti
      options={interests}
      value={value.split(',').map(val => interests.find(c => c.value === val))}
      onChange={(_, option) => onChange(name, option.map(opt => opt.value).join(','))}
      {...props}
    />
    <FormikErrorMessage name={name} />
  </FormGroup>
);

export default FormikInterests;
