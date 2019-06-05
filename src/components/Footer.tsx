import * as React from 'react';
import './Footer.less';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = props => {
  return (
    <footer className='footer'>
      {' '}
      <h1>wellcome to my React app</h1>{' '}
    </footer>
  );
};

export default Footer;
