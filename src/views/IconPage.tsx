import * as React from 'react';
import Common from '../layouts/Common';
import { Button, Row, Divider, Icon, Typography } from 'antd';

interface IIconPageProps {}

const IconPage: React.FunctionComponent<IIconPageProps> = props => {
  return (
    <Common>
      <Row>
        <Row className='mt-3'>
          <Divider orientation='left'>
            <span className='text-gray text-small'>Simple Used</span>
          </Divider>
          <Typography.Text
            className='m-2'
            code
          >{`<Icon type="icon-name" />`}</Typography.Text>
        </Row>
        <Row className='mt-3'>
          <Divider orientation='left'>
            <span className='text-gray text-small'>
              <Typography.Text code>
                theme="filled | outlined | twoTone"
              </Typography.Text>
            </span>
          </Divider>
        </Row>
        <Button size='large' className='m-2'>
          <Icon type='cloud' theme='filled' /> filled
        </Button>
        <Button size='large' className='m-2'>
          <Icon type='cloud' theme='outlined' /> oulined
        </Button>
        <Button size='large' className='m-2'>
          <Icon type='cloud' theme='twoTone' /> twoTone
        </Button>
        <Row />

        <Row className='mt-3'>
          <Divider orientation='left'>
            <span className='text-gray text-small'>
              <Typography.Text code>{`spin={true | false}`}</Typography.Text>
            </span>
          </Divider>
        </Row>
        <Button size='large' className='m-2'>
          <Icon spin type='sync' />
        </Button>
        <Button size='large' className='m-2'>
          <Icon type='smile' spin />
        </Button>
        <Row />
      </Row>
    </Common>
  );
};

export default IconPage;
