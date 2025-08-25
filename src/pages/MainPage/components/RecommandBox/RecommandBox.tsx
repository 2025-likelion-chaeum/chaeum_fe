import { useNavigate } from 'react-router-dom';
import * as R from './RecommandBox.styles';

interface RegionButtonProps {
  id: number;
  img: string;
  type: string;
  price: string;
  region: string;
  size: string;
  tag: string[];
}

const RecommandBox = ({ id, img, type, price, region, size, tag }: RegionButtonProps) => {
  const navigate = useNavigate();
  return (
    <R.RecommandBox onClick={() => navigate(`/list/${id}`)}>
      <R.Img src={img} />
      <R.Info>
        <R.Regular12>{type}</R.Regular12>
        <R.Semibold12>{price}</R.Semibold12>
        <R.Medium10>
          {region} | {size}
        </R.Medium10>
        <R.Tags>
          {tag.map((t, idx) => (
            <R.Tag key={idx}>#{t}</R.Tag>
          ))}
        </R.Tags>
      </R.Info>
    </R.RecommandBox>
  );
};

export default RecommandBox;
