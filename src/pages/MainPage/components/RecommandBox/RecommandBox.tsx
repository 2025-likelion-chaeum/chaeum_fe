import * as R from './RecommandBox.styles';

interface RegionButtonProps {
  img: string;
  type: string;
  price: string;
  region: string;
  size: string;
  tag: string[];
  onClick: () => void;
}

const RecommandBox = ({ img, type, price, region, size, tag, onClick }: RegionButtonProps) => {
  return (
    <R.RecommandBox onClick={onClick}>
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
