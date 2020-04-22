import React from 'react';
import { connect } from 'react-redux';
import { categoriesForSelect } from 'Redux/selectors';
import { CustomInput, FormGroup, Label } from 'reactstrap';
import IntlMessages from 'Util/IntlMessages';
import FormikErrorMessage from './FormikErrorMessage';

class FormikCheckboxGroup extends React.Component {
  state = {
    all: false,
  }

  handleChange = (selected) => {
    const categorySelected = { id: selected.value, name: selected.label };
    const { name, value, onChange } = this.props;
    const values = [...value] || [];
    if (!values.find(v => v.id === categorySelected.id)) {
      values.push(categorySelected);
    } else {
      values.splice(values.map(val => val.id).indexOf(categorySelected.id), 1);
    }
    onChange(name, values);
  };

  handleSelectAll = () => {
    const { categories, onChange, name } = this.props;
    this.setState((state) => {
      if (state.all) {
        onChange(name, []);
      } else {
        onChange(name, categories.map(option => ({ id: option.value, name: option.label })));
      }
      return { all: !state.all };
    });
  }

  handleBlur = () => {
    const { onBlur, name } = this.props;
    onBlur(name, true);
  };

  render() {
    const {
      className = 'error-l-200 tooltip-label-right',
      name,
      value,
      label,
      categories = [],
    } = this.props;
    const { all } = this.state;
    return (
      <FormGroup className={className}>
        <Label className="d-block">
          <IntlMessages id={label} />
        </Label>
        <div className="d-flex flex-row flex-wrap">
          <CustomInput
            inline
            key={`${name}_all`}
            type="checkbox"
            id={`${name}_all`}
            name={`${name}_all`}
            label="All"
            onChange={this.handleSelectAll}
            checked={!!all}
            className="w-25 m-0"
          />
          {categories.map(child => (
            <CustomInput
              inline
              key={`${name}_${child.value}`}
              type="checkbox"
              id={`${name}_${child.label}`}
              name={child.label}
              label={child.label}
              onChange={() => this.handleChange(child)}
              onBlur={this.handleBlur}
              checked={!!value.find(v => v.id === child.value)}
              className="w-25 m-0"
            />
          ))}
        </div>
        <FormikErrorMessage name={name} />
      </FormGroup>
    );
  }
}

const mapStateToProps = state => ({
  categories: categoriesForSelect(state),
});

export default connect(mapStateToProps)(FormikCheckboxGroup);
