import * as M from './MainPage.styles';
import RegionButton from './components/RegionButton/RegionButton';
import RecommandBox from './components/RecommandBox/RecommandBox';
// import exampleImg from '@assets/ex_recHome.svg';

import HomeItem from '@components/HomeItem/HomeItem';
import type { ResponseMainDto } from '@/types/Main/main';
import { getMain } from '@apis/Main/main';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MainPage = () => {
  const navigate = useNavigate();
  const [recommandData, setRecommandData] = useState<ResponseMainDto['data']['recommended']>([]);
  const [HomeData, setHomeData] = useState<ResponseMainDto['data']['hot']>([]);
  const [sell, setSell] = useState<boolean>(false);

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

  useEffect(() => {
    const getMainData = async () => {
      try {
        const res = await getMain();
        console.log(res);
        if (res.data.purpose === 'SELL') {
          setSell(true);
        } else {
          setSell(false);
        }
        setRecommandData(res.data.recommended);
        setHomeData(res.data.hot);
      } catch (error) {
        console.error('메인 조회 실패:', error);
      }
    };

    getMainData();
  }, []);

  const regions: string[] = [
    '서울',
    '경기',
    '인천',
    '부산',
    '대구',
    '대전',
    '광주',
    '울산',
    '세종',
    '충북',
    '충남',
    '경북',
    '경남',
    '전북',
    '전남',
    '강원',
    '제주',
  ];

  return (
    <M.MainPage>
      <M.Group>
        <M.Semibold18>어느 지역을 찾으시나요?</M.Semibold18>
        <M.Region>
          {regions.map((region) => (
            <RegionButton
              key={region}
              text={region}
              onClick={() => {
                navigate('/list', { state: { text: region } });
              }}
            />
          ))}
        </M.Region>
      </M.Group>
      {sell && (
        <M.Group>
          <div>
            <M.Semibold18>사용자가 관심 있어하는 빈집들이에요</M.Semibold18>
          </div>
          <M.ReccomandList>
            {recommandData.map((item) => (
              <RecommandBox
                key={item.id}
                id={item.id}
                img={item.imageUrls[0]}
                type={SALE_TYPE_REVERSE_MAP[item.saleType] || item.saleType}
                price={item.depositRent || '미정'}
                region={item.address}
                size={item.area || '불확실'}
                tag={[]}
              />
            ))}
          </M.ReccomandList>
        </M.Group>
      )}
      <M.Group>
        <M.Title>
          <M.Semibold18>방금 등록된 따끈한 빈집들</M.Semibold18>
          <M.Regular12
            onClick={() => {
              navigate('/list', { state: { text: '전국' } });
            }}>
            더 보러가기
          </M.Regular12>
        </M.Title>
        <M.HomeList>
          {HomeData.map((item) => (
            <HomeItem
              key={item.id}
              id={item.id}
              img={item.imageUrls[0]}
              type={SALE_TYPE_REVERSE_MAP[item.saleType] || item.saleType}
              price={item.depositRent || '미정'}
              region={item.address}
              size={item.area || '불확실'}
            />
          ))}
        </M.HomeList>
      </M.Group>
    </M.MainPage>
  );
};

export default MainPage;
