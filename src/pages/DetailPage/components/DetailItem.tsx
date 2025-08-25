import * as D from './DetailItem.styles';

interface DetailItemProps {
  title: string;
  content: string;
}

const DetailItem = ({ title, content }: DetailItemProps) => {
  return (
    <D.DetailItem>
      <D.Title>{title}</D.Title>
      <D.Content>{content}</D.Content>
    </D.DetailItem>
  );
};

export default DetailItem;
