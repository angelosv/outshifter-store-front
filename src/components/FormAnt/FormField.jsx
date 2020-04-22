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

const FormField = ({
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
          {
            type: "email",
            message: `The input is not valid ${placeholder}`
          },
          {
            required: true,
            message: `Please input your ${placeholder}!`,
          },
        ]}
      >
        {!!password ? <Input.Password placeholder={placeholder}/> :<Input placeholder={placeholder} />  }
      </Form.Item>
);

export default FormField;
