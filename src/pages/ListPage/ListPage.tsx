import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as L from './ListPage.styles';
import Topbar from '@/components/Topbar/Topbar';
// import exampleImg from '@assets/ex_recHome.svg';
import HomeItem from '@components/HomeItem/HomeItem';
import Dropdown from '@components/Dropdown/Dropdown';
import type { RequestListDto, ResponseListDto } from '@/types/HomeList/list';
import type { SaleTypeKo, DealTypeKo, SaleTypeEn, DealTypeEn } from '@/types/common';
import { convertSaleType, convertDealType } from '@/types/common';
import { getList } from '@apis/ListPage/ListPage';

type HomeDataItem = {
  id: number;
  source: string;
  region: string;
  title: string;
  address: string;
  saleType: SaleTypeEn;
  dealType: DealTypeEn;
  depositRent: string;
  area: string;
  imageUrls: string[];
  postedOn: string;
};

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
  const [homeData, setHomeData] = useState<HomeDataItem[]>([]);

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

  const getHomeData = async () => {
    try {
      // 한글 -> 영어 변환
      const saleTypes = selectedCategories.map((category) => convertSaleType(category as SaleTypeKo));
      const dealTypes = selectedMethods.map((method) => convertDealType(method as DealTypeKo));

      const requestData: RequestListDto = {
        region: text || '', // text를 region으로 사용
        saleTypes: saleTypes,
        dealTypes: dealTypes,
        priceRanges: selectedPrices,
        userOnly: false,
        page: 0,
        size: 10,
      };

      const res = await getList(requestData);

      // res.data가 배열인지 확인 후 설정
      if (Array.isArray(res.data)) {
        setHomeData(res.data);
      } else {
        // res.data가 객체이고 배열을 포함하고 있는 경우를 대비
        console.log('API Response:', res);
        setHomeData([]);
      }
    } catch (err) {
      console.error('리스트 불러오기 실패', err);
      setHomeData([]); // 에러 시 빈 배열로 설정
    }
  };

  useEffect(() => {
    getHomeData();
  }, []); // 빈 dependency array로 수정

  // 필터 변경 시 API 재호출
  useEffect(() => {
    if (text) {
      // text가 있을 때만 호출
      getHomeData();
    }
  }, [selectedCategories, selectedMethods, selectedPrices, text]);

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
          {homeData.map((item, idx) => (
            <HomeItem
              key={item.id || idx} // API 데이터의 id 사용
              img={item.imageUrls?.[0] || ''} // 안전한 접근
              type={`${item.saleType} ${item.dealType}`} // 매물종류 + 거래방식
              price={item.depositRent}
              region={item.address || item.region} // address 우선, 없으면 region
              size={item.area}
              onClick={() => console.log(`${item.title} 클릭됨`)}
            />
          ))}
        </L.HomeList>
      </L.ListPage>
    </>
  );
};

export default ListPage;
