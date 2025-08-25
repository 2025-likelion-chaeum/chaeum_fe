import * as R from './RegionButton.styles';

interface RegionButtonProps {
  text: string;
  onClick: () => void;
}

const RegionButton = ({ text, onClick }: RegionButtonProps) => {
  return <R.Button onClick={onClick}>{text}</R.Button>;
};

export default RegionButton;
