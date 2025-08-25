import { useEffect, useState } from 'react';

import * as M from './MapPage.styles';

import HomeItem from '@/components/HomeItem/HomeItem';
import Dropdown from '@/components/Dropdown/Dropdown';

import exampleImg from '@assets/ex_recHome.svg';
import { useNavigate } from 'react-router-dom';
import { postMap } from '@/apis/Map/Map';
import type { House } from '@/types/Map/Map';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

type KakaoResult = {
  x: string;
  y: string;
};

type KakaoStatus = 'OK' | 'ZERO_RESULT' | 'ERROR';

type info = {
  img: React.ReactNode;
  type: string;
  price: string;
  region: string;
  size: string;
};

const MapPage = () => {
  const [info, setInfo] = useState<info>();
  const [showItem, setShowItem] = useState(false);

  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [mapData, setMapData] = useState<House[]>([]);

  const type = [
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
    '천만원 미만',
    '천만원 이상 5천만원 미만',
    '5천만원 이상 1억원 미만',
    '1억원 이상 5억원 미만',
    '5억원 이상 10억원 미만',
    '10억원 이상',
  ];

  const handleSelect = (item: string) => {
    setSelectedType((prev) => (prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]));
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
    const fetchData = async () => {
      try {
        const response = await postMap({
          region: null,
          saleTypes: ['COUNTRY_HOUSE'],
          dealTypes: [],
          priceRanges: [],
          userOnly: false,
          page: 0,
          size: 80,
        });

        console.log(response);
        setMapData(response.data);
      } catch (error) {
        console.log('지도 불러오기 실패', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (mapData.length === 0) console.log(1);
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_KEY}&autoload=false&libraries=services,clusterer`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.6213406, 127.0205069),
          level: 4,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        const clusterer = new window.kakao.maps.MarkerClusterer({
          map: map,
          minLevel: 3,
        });

        const style = [
          {
            width: '55px',
            height: '22px',
            background: '#1d1d1d',
            color: '#ffffff',
            'border-radius': '8px 8px 8px 0',
            'font-size': '10px',
            'font-style': 'normal',
            'font-weight': 500,
            'line-height': '140%',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
          },
        ];

        mapData?.forEach((loc) => {
          geocoder.addressSearch(loc?.address, function (result: KakaoResult[], status: KakaoStatus) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              const content = document.createElement('div');
              content.innerHTML = `
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    max-width: 80px;
                    width: 100%;
                    background: #1d1d1d;
                    color: #fff;
                    font-size: 10px;
                    border: 1px solid #1d1d1d;
                    overflow: hidden;
                    font-weight: 500;
                    line-height: 140%;
                    border-radius: 8px 8px 8px 0;
                    text-align: center;
                  "
                >
                  <div
                    style="
                      font-weight: bold;
                      padding: 4px 10px;
                      width: 100%;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    "
                  >
                    ${loc.region}
                  </div>
                  <div
                    style="
                      width: 100%;
                      padding: 4px 10px;
                      background: #fff;
                      color: #1d1d1d;
                      font-size: 12px;
                      font-weight: 600;
                      text-align: center;
                    "
                  >
                    ${loc.depositRent || '미정'}
                  </div>
                </div>
              `;

              const infowindow = new window.kakao.maps.CustomOverlay({
                content: content,
                position: coords,
                map: map,
              });

              content.addEventListener('click', () => {
                setShowItem(true);
                setInfo({
                  img: exampleImg,
                  type: loc.region,
                  price: loc.depositRent || '미정',
                  region: loc.address,
                  size: loc.area || '불확실',
                });
              });

              infowindow.setMap(map);

              clusterer.setTexts(function (size: number) {
                const text = `빈집 ${size}개`;
                return text;
              });

              clusterer.addMarker(infowindow);
              clusterer.setStyles(style);
              // map.setCenter(coords);
            }
          });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [mapData]);

  const navigate = useNavigate();

  return (
    <>
      <M.MapPage id="map">
        <M.DropdownContaioner>
          <Dropdown
            text="매물 종류"
            array={type}
            onSelect={handleSelect}
            selected={selectedType}
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
            text="거래 금액"
            array={price}
            onSelect={handleSelectPrice}
            selected={selectedPrices}
            isOpen={openDropdown === 'price'}
            onToggle={() => toggleDropdown('price')}
          />
        </M.DropdownContaioner>
        {showItem && (
          <M.HomeItemContainer style={{}}>
            <HomeItem
              img={exampleImg}
              type={info?.type || ''}
              price={info?.price || ''}
              region={info?.region || ''}
              size={info?.size || ''}
              onClick={() => navigate('/list/1')}
            />
          </M.HomeItemContainer>
        )}
      </M.MapPage>
    </>
  );
};

export default MapPage;
