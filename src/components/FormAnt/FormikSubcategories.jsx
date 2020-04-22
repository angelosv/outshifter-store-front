import React from 'react';
import {
  FormGroup, Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import { categoriesForSelect, subcategoriesForSelectById } from 'Redux/selectors';
import IntlMessages from 'Util/IntlMessages';
import FormikReactSelect from './FormikReactSelect';
import FormikErrorMessage from './FormikErrorMessage';

const FormikSubcategories = ({
  className = 'error-l-100 tooltip-label-right',
  name,
  label,
  categories,
  getSubcategories,
  categoryId,
  ...props
}) => (
  <FormGroup className={className}>
    <Label>
      <IntlMessages id={label} />
    </Label>
    <FormikReactSelect
      isMulti
      name={name}
      options={getSubcategories(categoryId)}
      {...props}
    />
    <FormikErrorMessage name={name} />
  </FormGroup>
);

const mapStateToProps = state => ({
  getSubcategories: id => subcategoriesForSelectById(state, id),
  categories: categoriesForSelect(state),
});

export default connect(mapStateToProps)(FormikSubcategories);
