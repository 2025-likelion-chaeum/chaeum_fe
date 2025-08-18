import { useEffect, useState } from 'react';
import * as M from './MapPage.styles';
import locations from '@data/locations.json';
import HomeItem from '@/components/HomeItem/HomeItem';
import exampleImg from '@assets/ex_recHome.svg';

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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_KEY}&autoload=false&libraries=services,clusterer`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 6,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        const clusterer = new window.kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
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

        locations.forEach((loc) => {
          geocoder.addressSearch(loc.address, function (result: KakaoResult[], status: KakaoStatus) {
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
                    ${loc.cost}
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
                  price: loc.displayCost,
                  region: loc.displayAddress,
                  size: loc.size,
                });
              });

              infowindow.setMap(map);

              clusterer.setTexts(function (size: number) {
                const text = `빈집 ${size}개`;
                return text;
              });

              clusterer.addMarker(infowindow);
              clusterer.setStyles(style);
              map.setCenter(coords);
            }
          });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <M.MapPage id="map"></M.MapPage>
      {showItem && (
        <M.HomeItemContainer style={{}}>
          <HomeItem
            img={exampleImg}
            type={info?.type || ''}
            price={info?.price || ''}
            region={info?.region || ''}
            size={info?.size || ''}
            onClick={() => console.log(`${info?.type} 클릭됨`)}
          />
        </M.HomeItemContainer>
      )}
    </>
  );
};

export default MapPage;
