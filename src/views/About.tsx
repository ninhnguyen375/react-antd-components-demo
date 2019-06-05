import * as React from 'react';
import Common from '../layouts/Common';
import { Button, Row, Icon } from 'antd';

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = props => {
  return (
    <Common>
      <h1 className='text-gray-center text-bold'>
        My List Of Ant Design Components.
      </h1>
      <h4 className='text-gray-center'>Contact Me</h4>
      <Row type='flex' justify='center'>
        <Button type='primary' ghost={true}>
          Facebook <Icon type='facebook' theme='filled' />
        </Button>
        <Button className='ml-2' type='danger' ghost={true}>
          Gmail <Icon type='mail' theme='filled' />
        </Button>
      </Row>
      <div className='text-gray-center mt-2'>Thanks for visiting!</div>
    </Common>
  );
};

export default About;
