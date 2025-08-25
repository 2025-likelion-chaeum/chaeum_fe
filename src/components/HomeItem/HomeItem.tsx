import * as R from '@pages/MainPage/components/RecommandBox/RecommandBox.styles';
import { useNavigate } from 'react-router-dom';

interface HomeItemProps {
  id: number;
  img: string;
  type: string;
  price: string;
  region: string;
  size: string;
}

const HomeItem = ({ id, img, type, price, region, size }: HomeItemProps) => {
  const navigate = useNavigate();
  return (
    <R.HomeItemBox onClick={() => navigate(`/list/${id}`)}>
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
