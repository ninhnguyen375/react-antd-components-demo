import * as React from 'react';

interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = props => {
  return (
    <h1 className='text-gray-center'>
      404. I am so sorry. This page not found!
    </h1>
  );
};

export default NotFound;
