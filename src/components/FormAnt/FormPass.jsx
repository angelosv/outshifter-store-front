import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const validatePassword = (rule, value, callback) => {
  if (value && value !== "Secret") {
    callback("Error!");
  } else {
    callback();
  }
};

const FormField = ({
  validation,
  password,
  className,
  pushTooltip = 100,
  label,
  labelStyle,
  name,
  inputStyle,
  suffix,
  placeholder,
  disabled = false,
  ...props
}) => (
<Form.Item
        name={name}
        rules={[
          { required: true, message: "Please input your Password!" },
          { validator: validatePassword }
        ]}
      >
        <Input placeholder={placeholder}           type="password"
           /> 
      </Form.Item>
);

export default FormField;
