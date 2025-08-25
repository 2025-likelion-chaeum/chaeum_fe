import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as L from './ListPage.styles';
import Topbar from '@/components/Topbar/Topbar';
import exampleImg from '@assets/ex_recHome.svg';
import HomeItem from '@components/HomeItem/HomeItem';
import Dropdown from '@components/Dropdown/Dropdown';

/**
 * Topbar에 들어가는 제목 내용이 계속 바뀌므로,
 * state의 text 값을 받아서 표시할 수 있게 구현해 두었습니다.
 *
 * useNavigate로 이동시 navigate('/list', { state: { text: "Topbar에 들어갈 내용" } })
 * 다음과 같은 방식으로 넘겨주세요.
 *
 * @author 김진효
 * **/

const ListPage = () => {
  const location = useLocation();
  const { text } = location.state || {};

  const HomeData = [
    {
      img: exampleImg,
      type: '농가주택 매매',
      price: '매매 9,000만원',
      region: '충청남도 서천군',
      size: '대 529m²(160평)',
    },
    {
      img: exampleImg,
      type: '한옥 임대',
      price: '월세 50만원',
      region: '전라북도 전주시',
      size: '대 120m²(36평)',
    },
    {
      img: exampleImg,
      type: '상가 매매',
      price: '매매 2억 5,000만원',
      region: '경기도 고양시',
      size: '대 200m²(60평)',
    },
    {
      img: exampleImg,
      type: '농가주택 매매',
      price: '매매 9,000만원',
      region: '충청남도 서천군',
      size: '대 529m²(160평)',
    },
    {
      img: exampleImg,
      type: '한옥 임대',
      price: '월세 50만원',
      region: '전라북도 전주시',
      size: '대 120m²(36평)',
    },
    {
      img: exampleImg,
      type: '상가 매매',
      price: '매매 2억 5,000만원',
      region: '경기도 고양시',
      size: '대 200m²(60평)',
    },
    {
      img: exampleImg,
      type: '농가주택 매매',
      price: '매매 9,000만원',
      region: '충청남도 서천군',
      size: '대 529m²(160평)',
    },
    {
      img: exampleImg,
      type: '한옥 임대',
      price: '월세 50만원',
      region: '전라북도 전주시',
      size: '대 120m²(36평)',
    },
    {
      img: exampleImg,
      type: '상가 매매',
      price: '매매 2억 5,000만원',
      region: '경기도 고양시',
      size: '대 200m²(60평)',
    },
  ];

  const category = [
    '시골농가주택',
    '전원주택',
    '조립식주택',
    '토지/임야',
    '아파트/빌라',
    '과수원/농장',
    '민박펜션/체험농장',
    '공장/창고',
  ];

  const method = ['매매', '임대', '전세', '월세', '단기'];

  const price = [
    '천만원 이상',
    '천만원 이상 5천만원 미만',
    '5천만원 이상 1억원 미만',
    '1억원 이상 5억원 미만',
    '5억원 이상 10억원 미만',
    '10억원 이상',
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedCategories((prev) => (prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]));
  };

  const handleSelectMethod = (item: string) => {
    setSelectedMethods((prev) => (prev.includes(item) ? prev.filter((m) => m !== item) : [...prev, item]));
  };

  const handleSelectPrice = (item: string) => {
    setSelectedPrices((prev) => (prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]));
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <Topbar text={text + '의 빈집들'} style="none" />
      <L.ListPage>
        <L.DropdownContaioner>
          <Dropdown
            text={'매물 종류'}
            array={category}
            onSelect={handleSelect}
            selected={selectedCategories}
            isOpen={openDropdown === 'category'}
            onToggle={() => toggleDropdown('category')}
          />
          <Dropdown
            text="거래 방식"
            array={method}
            onSelect={handleSelectMethod}
            selected={selectedMethods}
            isOpen={openDropdown === 'method'}
            onToggle={() => toggleDropdown('method')}
          />
          <Dropdown
            text="가격 범위"
            array={price}
            onSelect={handleSelectPrice}
            selected={selectedPrices}
            isOpen={openDropdown === 'price'}
            onToggle={() => toggleDropdown('price')}
          />
        </L.DropdownContaioner>
        <L.HomeList>
          {HomeData.map((item, idx) => (
            <HomeItem
              key={idx}
              img={item.img}
              type={item.type}
              price={item.price}
              region={item.region}
              size={item.size}
              onClick={() => console.log(`${item.type} 클릭됨`)}
            />
          ))}
        </L.HomeList>
      </L.ListPage>
    </>
  );
};

export default ListPage;
