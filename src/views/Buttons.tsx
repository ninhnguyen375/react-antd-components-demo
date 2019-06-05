import * as React from 'react';
import Common from '../layouts/Common';
import ButtonList from '../components/Buttons/ButtonList';

interface IButtonsProps {}

const Buttons: React.FunctionComponent<IButtonsProps> = props => {
  return (
    <Common>
      <ButtonList />
    </Common>
  );
};

export default Buttons;
