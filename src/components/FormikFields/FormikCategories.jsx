import React from 'react';
import {
  FormGroup, Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import { categoriesForSelect } from 'Redux/selectors';
import IntlMessages from 'Util/IntlMessages';
import FormikReactSelect from './FormikReactSelect';

const FormikCategories = ({
  className = 'error-l-100 tooltip-label-right',
  label,
  categories,
  ...props
}) => categories.length && (
  <FormGroup className={className}>
    <Label>
      <IntlMessages id={label} />
    </Label>
    <FormikReactSelect
      options={categories}
      {...props}
    />
  </FormGroup>
);

const mapStateToProps = state => ({
  categories: categoriesForSelect(state),
});

export default connect(mapStateToProps)(FormikCategories);
