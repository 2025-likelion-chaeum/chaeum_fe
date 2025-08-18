import * as C from './CheckItem.styles';
import button from '@assets/icon-radiobutton-20.svg';
import checkedButton from '@assets/icon-radio-check.svg';

interface CheckItemProps {
  text: string;
  checked: boolean;
  onClick: () => void;
}

const CheckItem = ({ text, checked, onClick }: CheckItemProps) => {
  return (
    <C.CheckItem onClick={onClick}>
      <img src={checked ? checkedButton : button} />
      <C.Text>{text}</C.Text>
    </C.CheckItem>
  );
};

export default CheckItem;
