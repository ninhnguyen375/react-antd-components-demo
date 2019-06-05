import * as React from 'react';
import { Layout, Menu, Breadcrumb, Icon, BackTop } from 'antd';
import { Link, withRouter, match } from 'react-router-dom';
import * as H from 'history';
import { StaticContext } from 'react-router';
import Footer from '../components/Footer';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface ICommonProps {
  history: H.History;
  location: H.Location;
  match: match;
  staticContext?: StaticContext;
}

const Common: React.FunctionComponent<ICommonProps> = props => {
  const [selectedHeaderItem, setSelectedHeaderItem] = React.useState([
    props.location.pathname,
  ]);
  const [selectedSideBarItem, setSelectedSideBarItem] = React.useState([
    props.location.pathname,
  ]);

  const handleItemChange = () => {
    setSelectedHeaderItem([props.location.pathname]);
    setSelectedSideBarItem([props.location.pathname]);
  };

  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={selectedHeaderItem}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='/' onClick={handleItemChange}>
            <Link to='/'>HOME</Link>
          </Menu.Item>
          <Menu.Item key='/about' onClick={handleItemChange}>
            <Link to='/about'>ABOUT</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} breakpoint='lg' collapsedWidth='0'>
          <Menu
            mode='inline'
            defaultSelectedKeys={selectedSideBarItem}
            onSelect={handleItemChange}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.ItemGroup title='Greneral'>
              <Menu.Item key='/buttons'>
                <Link to='/buttons'>Buttons</Link>
              </Menu.Item>
              <Menu.Item key='/icon'>
                <Link to='/icon'>Icon</Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <SubMenu
              key='sub2'
              title={
                <span>
                  <Icon type='laptop' />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key='5'>option5</Menu.Item>
              <Menu.Item key='6'>option6</Menu.Item>
              <Menu.Item key='7'>option7</Menu.Item>
              <Menu.Item key='8'>option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub3'
              title={
                <span>
                  <Icon type='notification' />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key='9'>option9</Menu.Item>
              <Menu.Item key='10'>option10</Menu.Item>
              <Menu.Item key='11'>option11</Menu.Item>
              <Menu.Item key='12'>option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>

      {/* fixed components */}
      <BackTop />
    </Layout>
  );
};

export default withRouter(Common);
