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

//
