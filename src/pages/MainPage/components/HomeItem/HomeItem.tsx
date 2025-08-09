import * as R from '../RecommandBox/RecommandBox.styles';

interface HomeItemProps {
  img: string;
  type: string;
  price: string;
  region: string;
  size: string;
  onClick: () => void;
}

const HomeItem = ({ img, type, price, region, size, onClick }: HomeItemProps) => {
  return (
    <R.HomeItemBox onClick={onClick}>
      <R.HomeImg src={img} />
      <R.Info>
        <R.Regular12>{type}</R.Regular12>
        <R.Semibold12>{price}</R.Semibold12>
        <R.Medium10>
          {region} | {size}
        </R.Medium10>
      </R.Info>
    </R.HomeItemBox>
  );
};

export default HomeItem;
