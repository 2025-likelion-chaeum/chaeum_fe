import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as L from './ListPage.styles';
import Topbar from '@/components/Topbar/Topbar';
import HomeItem from '@components/HomeItem/HomeItem';
import Dropdown from '@components/Dropdown/Dropdown';
import type { House } from '@/types/Map/Map';
import { postMap } from '@/apis/Map/Map';
import defaultImg from '@assets/default_img.svg?url';

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

  const SALE_TYPE_MAP: Record<string, string> = {
    시골농가주택: 'RURAL_FARM_HOUSE',
    전원주택: 'COUNTRY_HOUSE',
    조립식주택: 'PREFAB_HOUSE',
    '토지/임야': 'LAND',
    '아파트/빌라': 'APARTMENT_VILLA',
    '과수원/농장': 'ORCHARD_FARM',
    '민박펜션/체험농장': 'GUESTHOUSE_FARMSTAY',
    '공장/창고': 'FACTORY_WAREHOUSE',
  };

  const SALE_TYPE_REVERSE_MAP = Object.fromEntries(Object.entries(SALE_TYPE_MAP).map(([ko, en]) => [en, ko]));

  const DEAL_TYPE_MAP: Record<string, string> = {
    매매: 'SALE',
    임대: 'RENTAL',
    전세: 'JEONSE',
    월세: 'MONTHLYRENT',
    단기: 'SHORTTERM',
  };

  const PRICE_RANGE_MAP: Record<string, { min: number; max: number | null }> = {
    '천만원 미만': { min: 0, max: 10000000 },
    '천만원 이상 5천만원 미만': { min: 10000000, max: 50000000 },
    '5천만원 이상 1억원 미만': { min: 50000000, max: 100000000 },
    '1억원 이상 5억원 미만': { min: 100000000, max: 500000000 },
    '5억원 이상 10억원 미만': { min: 500000000, max: 1000000000 },
    '10억원 이상': { min: 1000000000, max: null },
  };

  const [housesData, setHousesData] = useState<House[]>([]);

  const fetchData = async () => {
    try {
      const response = await postMap({
        region: text,
        saleTypes: selectedCategories.map((t) => SALE_TYPE_MAP[t]),
        dealTypes: selectedMethods.map((m) => DEAL_TYPE_MAP[m]),
        priceRanges: selectedPrices.map((p) => PRICE_RANGE_MAP[p]),
        userOnly: false,
        page: 0,
        size: 80,
      });
      console.log(response);

      setHousesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const HomeData = [
  //   {
  //     img: exampleImg,
  //     type: '농가주택 매매',
  //     price: '매매 9,000만원',
  //     region: '충청남도 서천군',
  //     size: '대 529m²(160평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '한옥 임대',
  //     price: '월세 50만원',
  //     region: '전라북도 전주시',
  //     size: '대 120m²(36평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '상가 매매',
  //     price: '매매 2억 5,000만원',
  //     region: '경기도 고양시',
  //     size: '대 200m²(60평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '농가주택 매매',
  //     price: '매매 9,000만원',
  //     region: '충청남도 서천군',
  //     size: '대 529m²(160평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '한옥 임대',
  //     price: '월세 50만원',
  //     region: '전라북도 전주시',
  //     size: '대 120m²(36평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '상가 매매',
  //     price: '매매 2억 5,000만원',
  //     region: '경기도 고양시',
  //     size: '대 200m²(60평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '농가주택 매매',
  //     price: '매매 9,000만원',
  //     region: '충청남도 서천군',
  //     size: '대 529m²(160평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '한옥 임대',
  //     price: '월세 50만원',
  //     region: '전라북도 전주시',
  //     size: '대 120m²(36평)',
  //   },
  //   {
  //     img: exampleImg,
  //     type: '상가 매매',
  //     price: '매매 2억 5,000만원',
  //     region: '경기도 고양시',
  //     size: '대 200m²(60평)',
  //   },
  // ];

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedCategories.length, selectedMethods.length, selectedPrices.length]);

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
          {housesData?.map((item, idx) => (
            <HomeItem
              key={idx}
              img={item.imageUrls[0] || defaultImg}
              type={SALE_TYPE_REVERSE_MAP[item.saleType] || item.saleType}
              price={item.depositRent || '미정'}
              region={item.address}
              size={item.area || '불확실'}
              onClick={() => {}}
            />
          ))}
        </L.HomeList>
      </L.ListPage>
    </>
  );
};

export default ListPage;
