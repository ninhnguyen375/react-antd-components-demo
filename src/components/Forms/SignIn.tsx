import { Button, Col, Form, Input, message, Modal, Row } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import * as React from 'react';
import './signin.less';

interface ISignInProps {
  form: WrappedFormUtils;
}

const SignIn: React.FC<ISignInProps> = props => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { form } = props;
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFields((errors, values) => {
      if (!errors) {
        setIsLoading(true);
        console.log(values);
        setTimeout(() => {
          setIsLoading(false);
          message.success('Success');
        }, 2000);
      } else {
        message.error('Please complete this form');
      }
    });
  };

  const resetForm = () => {
    Modal.confirm({
      title: 'Reset Form',
      content: 'Are you sure',
      onOk: () => {
        form.resetFields();
      },
      onCancel: () => {
        message.info('Your form is save :))');
      },
    });
  };

  const formLayout = {
    lg: 8,
    md: 8,
    sm: 16,
    xs: 20,
  };

  return (
    <>
      {props.form.getFieldDecorator('firm', {
        rules: [{
          required: true,
          message: 'hihi'
        }]
      })}
      <h1 className='text-gray-center mt-4'>Sign In</h1>
      <Row type='flex' justify='center'>
        <Col {...formLayout} className='formLayout'>
          <Form layout='vertical' onSubmit={handleSignIn}>
            <Form.Item label='Email' hasFeedback>
              {form.getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                  {
                    type: 'email',
                    message: 'Please input an email!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Password'>
              {form.getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    min: 6,
                    message: 'Min 6 characters!',
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Button type='primary' loading={isLoading} htmlType='submit'>
              Submit
            </Button>
            <Button className='ml-3' htmlType='button' onClick={resetForm}>
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Form.create({ name: 'SignIn' })(SignIn);
