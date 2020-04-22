import React from 'react';
import {
  FormGroup, Label,
} from 'reactstrap';
import IntlMessages from 'Util/IntlMessages';
import countries from '../../constants/countries.json';
import FormikReactSelect from './FormikReactSelect';

const FormikCountries = ({
  className = 'error-l-100 tooltip-label-right',
  label,
  value,
  onChange,
  ...props
}) => (
  <FormGroup className={className}>
    { label && (
      <Label>
        <IntlMessages id={label} />
      </Label>
    )}
    <FormikReactSelect
      options={countries}
      value={countries.find(c => c.value === value)}
      onChange={(name, option) => onChange(name, option.value)}
      {...props}
    />
  </FormGroup>
);

export default FormikCountries;


