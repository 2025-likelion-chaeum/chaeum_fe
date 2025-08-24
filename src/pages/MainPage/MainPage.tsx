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

  useEffect(() => {
    const getMainData = async () => {
      try {
        const res = await getMain();
        console.log(res);
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

  // const recommandData = [
  //   {
  //     img: exampleImg,
  //     type: '농가주택 매매',
  //     price: '매매 9,000만원',
  //     region: '충청남도 서천군',
  //     size: '대 529m²(160평)',
  //     tag: ['조용한', '자연의'],
  //   },
  //   {
  //     img: exampleImg,
  //     type: '한옥 임대',
  //     price: '월세 50만원',
  //     region: '전라북도 전주시',
  //     size: '대 120m²(36평)',
  //     tag: ['전통적인', '한적한', '문화'],
  //   },
  //   {
  //     img: exampleImg,
  //     type: '상가 매매',
  //     price: '매매 2억 5,000만원',
  //     region: '경기도 고양시',
  //     size: '대 200m²(60평)',
  //     tag: ['상권좋은', '교통편리'],
  //   },
  // ];

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
      <M.Group>
        <div>
          <M.Semibold18 style={{ marginBottom: '3px' }}>멋사 님이 관심있는</M.Semibold18>
          <M.Semibold18>창업 공간을 위한 빈집들이에요</M.Semibold18>
        </div>
        <M.ReccomandList>
          {recommandData.map((item) => (
            <RecommandBox
              key={item.id}
              img={item.imageUrls}
              type={item.saleType}
              price={item.depositRent}
              region={item.address}
              size={item.area}
              tag={[]}
              onClick={() => console.log(`${item.saleType} 클릭됨`)}
            />
          ))}
        </M.ReccomandList>
      </M.Group>
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
              img={item.imageUrls}
              type={item.saleType}
              price={item.depositRent}
              region={item.address}
              size={item.area}
              onClick={() => console.log(`${item.saleType} 클릭됨`)}
            />
          ))}
        </M.HomeList>
      </M.Group>
    </M.MainPage>
  );
};

export default MainPage;
