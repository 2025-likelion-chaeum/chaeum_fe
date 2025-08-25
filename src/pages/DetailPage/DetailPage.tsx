import * as D from './DetailPage.styles';
import Topbar from '@/components/Topbar/Topbar';
import exampleImg from '@assets/ex_recHome.svg';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { AnimatePresence, useMotionValue } from 'motion/react';
import DetailItem from './components/DetailItem';
import { getDetail } from '@/apis/Detail/detail';
import type { ResponseDetailDto } from '@/types/Detail/detail';

const SALE_TYPE_MAP: Record<string, string> = {
  RURAL_FARM_HOUSE: '시골농가주택',
  COUNTRY_HOUSE: '전원주택',
  PREFAB_HOUSE: '조립식주택',
  LAND: '토지/임야',
  APARTMENT_VILLA: '아파트/빌라',
  ORCHARD_FARM: '과수원/농장',
  GUESTHOUSE_FARMSTAY: '민박펜션/체험농장',
  FACTORY_WAREHOUSE: '공장/창고',
};

const DEAL_TYPE_MAP: Record<string, string> = {
  SALE: '매매',
  RENTAL: '임대',
  JEONSE: '전세',
  MONTHLYRENT: '월세',
  SHORTTERM: '단기',
};

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [homeData, setHomeData] = useState<ResponseDetailDto['data'] | null>(null);

  const [blackTopbar, setBlackTopbar] = useState<boolean>(false);
  const [noTopBar, setNoTopbar] = useState<boolean>(false);

  const y = useMotionValue(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollTop = scrollRef.current.scrollTop;

    // blackTopbar가 true일 때만 y 값 업데이트
    if (blackTopbar) {
      const newY = Math.min(scrollTop, 180);
      y.set(-newY);
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await getDetail(Number(id));

        const data = res.data;

        const mappedSaleType = data.saleType ? SALE_TYPE_MAP[data.saleType] : '';
        const mappedDealType = data.dealType ? DEAL_TYPE_MAP[data.dealType] : '';

        setHomeData({
          ...data,
          saleType: mappedSaleType,
          dealType: mappedDealType,
        });
        console.log(res.data);
      } catch (err) {
        console.error('디테일 불러오기 실패', err);
      }
    };
    fetchData();

    return y.on('change', (latest) => {
      if (latest <= -180) {
        setNoTopbar(false);
        setBlackTopbar(true);
      } else if (latest > -180 && latest < -136) {
        setNoTopbar(true);
        setBlackTopbar(false);
      } else {
        setNoTopbar(false);
        setBlackTopbar(false);
      }
    });
  }, [y, id]);

  return (
    <D.DetailPage>
      <D.TopbarContainer>
        {noTopBar ? (
          <></>
        ) : blackTopbar ? (
          <Topbar text={`${homeData?.saleType} ${homeData?.depositRent ? homeData.depositRent : ''}`} style="border" />
        ) : (
          <Topbar
            text={`${homeData?.saleType} ${homeData?.depositRent ? homeData.depositRent : ''}`}
            style="gradient"
          />
        )}
      </D.TopbarContainer>

      <D.Image src={exampleImg} />

      <AnimatePresence>
        <D.Sheet style={{ y }}>
          <D.SheetScroll ref={scrollRef} onScroll={handleScroll}>
            <D.SheetContent>
              <D.Header>
                <D.Title style={{ marginTop: blackTopbar ? '40px' : '0' }}>
                  <D.Semibold16>{homeData?.dealType} 5억원</D.Semibold16>
                  <D.Regular12>등록일 {homeData?.postedOn}</D.Regular12>
                </D.Title>
                <D.Info>
                  <D.Medium14>
                    {homeData?.address} | {homeData?.saleType}
                  </D.Medium14>
                  <D.Medium14>{homeData?.area}</D.Medium14>
                </D.Info>
              </D.Header>

              <D.Detail>
                {homeData?.currentJeonse && <DetailItem title="현전세금" content={homeData.currentJeonse} />}
                {homeData?.currentDepositRent && (
                  <DetailItem title="현전보증금/월세" content={homeData.currentDepositRent} />
                )}
                {homeData?.moveInAvailableDate && (
                  <DetailItem title="입주가능일" content={homeData.moveInAvailableDate} />
                )}
                {homeData?.roomCount && <DetailItem title="방수/욕실" content={homeData.roomCount} />}
                {homeData?.direction && <DetailItem title="방향" content={homeData.direction} />}
                {homeData?.parkingSpace && <DetailItem title="주차대수" content={homeData.parkingSpace} />}
                {homeData?.heatingType && <DetailItem title="난방형태" content={homeData.heatingType} />}
                {homeData?.transportation && <DetailItem title="교통" content={homeData.transportation} />}
                {homeData?.facilities && <DetailItem title="편의시설/교육시설" content={homeData.facilities} />}
                {homeData?.options && <DetailItem title="옵션" content={homeData.options} />}
              </D.Detail>

              {homeData?.etc && (
                <D.Detail>
                  <D.Semibold14>기타 정보</D.Semibold14>
                  <D.Regular14 style={{ whiteSpace: 'pre-line' }}>{homeData?.etc}</D.Regular14>
                </D.Detail>
              )}
              {homeData?.phoneNum && (
                <D.Detail>
                  <D.Semibold14>연락처</D.Semibold14>
                  <D.Regular14>{homeData?.phoneNum}</D.Regular14>
                </D.Detail>
              )}
            </D.SheetContent>
          </D.SheetScroll>
        </D.Sheet>
      </AnimatePresence>
    </D.DetailPage>
  );
};

export default DetailPage;
