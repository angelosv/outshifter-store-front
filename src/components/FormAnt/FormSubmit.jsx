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
<Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {label}
        </Button>
      </Form.Item>
);

export default FormField;
