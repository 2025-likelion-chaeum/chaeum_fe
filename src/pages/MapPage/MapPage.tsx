import { useEffect } from 'react';
import * as M from './MapPage.styles';
import locations from '@data/locations.json';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const MapPage = () => {
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
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 7,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        const clusterer = new window.kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
          minLevel: 3,
        });

        locations.forEach((loc) => {
          geocoder.addressSearch(loc.address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              const infowindow = new window.kakao.maps.CustomOverlay({
                content: `
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
                        `,
                position: coords,
                map: map,
              });

              infowindow.setMap(map);
              clusterer.addMarker(infowindow);
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

  return <M.MapPage id="map"></M.MapPage>;
};

export default MapPage;
