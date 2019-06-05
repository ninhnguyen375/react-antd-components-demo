import * as React from 'react';
import { Form } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

interface ITestProps {
  form: WrappedFormUtils;
}

const Test: React.FunctionComponent<ITestProps> = props => {
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {props.form.getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Email is required!',
              },
            ],
          })}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'myForm' })(Test);
