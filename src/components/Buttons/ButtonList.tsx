import * as React from 'react';
import {
  Button,
  Row,
  Divider,
  Icon,
  Menu,
  Dropdown,
  Typography,
  Modal,
  message,
} from 'antd';

interface IButtonListProps {}

const ButtonList: React.FC<IButtonListProps> = props => {
  const [isShowImage, setIsShowImage] = React.useState(false);

  const demoCode = {
    multipleButton: `
      import React from 'react';
      import { Button, Dropdown, Icon, Menu } from 'antd';
      
      export default () => {
        const menu = (
          <Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        );
        return (
          <Dropdown overlay={menu}>
            <Button type="primary">
              Dropdown <Icon type="down" />
            </Button>
          </Dropdown>
        );
      };
    `,
  };

  const copyText = (text: string) => {
    const inputTemp = document.createElement('input');
    document.body.append(inputTemp);
    inputTemp.value = text;
    inputTemp.select();
    inputTemp.type = 'hidden';
    document.execCommand('copy');
    message.success('Copied!');
  };

  const menu = (
    <Menu>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  );

  return (
    <Row>
      <Divider orientation='left'>
        <span className='text-gray text-small'>Simple Used</span>
      </Divider>
      <img
        style={{ width: '100%' }}
        className='img-demo'
        src='/img/code-example/button.png'
        alt='example button'
      />
      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>
              type="default | danger | dashed | link | primary"
            </Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button className='m-3' type='default'>
          default
        </Button>
        <Button className='m-3' type='danger'>
          danger
        </Button>
        <Button className='m-3' type='dashed'>
          dashed
        </Button>
        <Button className='m-3' type='ghost'>
          ghost
        </Button>
        <Button className='m-3' type='link'>
          link
        </Button>
        <Button className='m-3' type='primary'>
          primary
        </Button>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>ghost={`{true | false}`}</Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button className='m-3' ghost={true} type='default'>
          default
        </Button>
        <Button className='m-3' ghost={true} type='danger'>
          danger
        </Button>
        <Button className='m-3' ghost={true} type='dashed'>
          dashed
        </Button>
        <Button className='m-3' ghost={true} type='ghost'>
          ghost
        </Button>
        <Button className='m-3' ghost={true} type='link'>
          link
        </Button>
        <Button className='m-3' ghost={true} type='primary'>
          primary
        </Button>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>icon="icon-name"</Typography.Text>
          </span>
          <a href='https://ant.design/components/icon/'>
            {' '}
            - Checkout more icons
          </a>
        </Divider>
      </Row>
      <Row>
        <Button icon='search' className='m-3' type='default'>
          default
        </Button>
        <Button icon='search' className='m-3' type='danger'>
          danger
        </Button>
        <Button icon='search' className='m-3' type='dashed'>
          dashed
        </Button>
        <Button icon='search' className='m-3' type='ghost'>
          ghost
        </Button>
        <Button icon='search' className='m-3' type='link'>
          link
        </Button>
        <Button icon='search' className='m-3' type='primary'>
          primary
        </Button>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>
              shape="circle | circle-outline | round"
            </Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button type='primary' icon='search' className='m-3' shape='circle' />
        <Button icon='search' className='m-3' shape='circle-outline' />
        <Button className='m-3' type='primary' shape='round'>
          Round
        </Button>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>
              size="small | default | large"
            </Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button type='primary' icon='search' className='m-3' size='small'>
          Search
        </Button>
        <Button type='primary' icon='search' className='m-3' size='default'>
          Search
        </Button>
        <Button type='primary' icon='search' className='m-3' size='large'>
          Search
        </Button>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>loading={`{true | false}`}</Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button type='primary' className='m-3' loading={true}>
          Loading
        </Button>
        <Button type='primary' className='m-3' shape='circle' loading={true} />
        <Button type='default' className='m-3' shape='circle' loading={true} />
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            Button Group. Wrap your Buttons with{' '}
            <Typography.Text code>
              {`<Button.Group>  </Button.Group>`}
            </Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button.Group className='m-3'>
          <Button type='primary'>Left</Button>
          <Button type='primary'>Right</Button>
        </Button.Group>
        <span className='m-3' />
        <Button.Group>
          <Button type='primary' icon='cloud' />
          <Button type='primary' icon='cloud-download' />
        </Button.Group>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>disabled={`{true | false}`}</Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button className='m-2' disabled={true} type='primary'>
          Disabled
        </Button>
        <Button className='m-2' disabled={true} type='danger'>
          Disabled
        </Button>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>Multiple Buttons</span>
        </Divider>
      </Row>

      <Row>
        <Dropdown overlay={menu}>
          <Button type='primary'>
            Dropdown <Icon type='down' />
          </Button>
        </Dropdown>
        <Button className='m-2' onClick={() => setIsShowImage(true)}>
          Show Code
        </Button>
        <Modal
          onCancel={() => setIsShowImage(false)}
          onOk={() => copyText(demoCode.multipleButton)}
          okText='Copy'
          visible={isShowImage}
        >
          <pre>
            <Typography.Paragraph code type='secondary'>
              <div>{demoCode.multipleButton}</div>
            </Typography.Paragraph>
          </pre>
        </Modal>
      </Row>

      <Row className='mt-3'>
        <Divider orientation='left'>
          <span className='text-gray text-small'>
            <Typography.Text code>block={`{true | false}`}</Typography.Text>
          </span>
        </Divider>
      </Row>
      <Row>
        <Button className='mt-2' block={true} type='primary'>
          Block is true
        </Button>
        <Button className='mt-2' block={true} type='danger'>
          Block is true
        </Button>
      </Row>
    </Row>
  );
};

export default ButtonList;
