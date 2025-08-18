import * as D from './DetailPage.styles';
import Topbar from '@/components/Topbar/Topbar';
import exampleImg from '@assets/ex_recHome.svg';
import BookMarkOff from '@assets/icon-bookmark-black-off.svg';
import BookMarkOn from '@assets/icon-bookmark-black-on.svg';
import BookMarkWhiteOff from '@assets/icon-bookmark-white-off.svg';
import BookMarkWhiteOn from '@assets/icon-bookmark-white-on.svg';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, useMotionValue } from 'motion/react';
import DetailItem from './components/DetailItem';

const DetailPage = () => {
  const [bookMarkClicked, setBookMarkClicked] = useState<boolean>(false);
  const [blackTopbar, setBlackTopbar] = useState<boolean>(false);
  const [noTopBar, setNoTopbar] = useState<boolean>(false);

  const y = useMotionValue(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const detailText = `1. 임대 조건
전세 3천만원 또는 월세 30만원

2. 특이사항
태안에는 해안선을 따라 30여 개의 유명한 해수욕장을 비롯하여 여러 가지 체험이나 여가활동을 하며 지낼 수 있는 곳들이 많습니다.

저희 체험농장에서는 태안시내 관공서와 병의원 금융기관 대형마트 등에 5분 이내 도착할 수 있고, 특히 귀농 귀촌을 희망하시면 태안군농업기술센터가 가까운 거리에 있어 각종 교육과 정보를 얻기에 매우 편리한 곳입니다.

저 또한 퇴직하고 1년 전 전혀 연고가 없는 태안으로 귀촌하여 농업기술센터 지원을 받아 농업경영체와 임업경영체를 등록하여 여러 가지 필요한 교육들을 이수하고, 직접 농사 지은 생산물을 태안로컬푸드에 출하하는 등 짧은 기간에 귀촌생활에 안정적으로 정착하였습니다.

3. 제한사항
다음 사항에 해당되는 분들은 정중히 사양하겠습니다.
- 반려동물을 키우시는 분
- 주택 안에서 음주와 흡연을 하시는 분
- 기간은 3개월 이상이면 좋겠습니다.`;

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
  }, [y]);

  return (
    <D.DetailPage>
      <D.TopbarContainer>
        {noTopBar ? (
          <></>
        ) : blackTopbar ? (
          <Topbar
            text="{빈집 제목 ex.농가주택 매매}"
            style="border"
            icon={bookMarkClicked ? BookMarkOn : BookMarkOff}
            onClickIcon={() => setBookMarkClicked((prev) => !prev)}
          />
        ) : (
          <Topbar
            text="{빈집 제목 ex.농가주택 매매}"
            style="gradient"
            icon={bookMarkClicked ? BookMarkWhiteOn : BookMarkWhiteOff}
            onClickIcon={() => setBookMarkClicked((prev) => !prev)}
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
                  <D.Semibold16>매매 5억원</D.Semibold16>
                  <D.Regular12>등록일 2025.07.28</D.Regular12>
                </D.Title>
                <D.Info>
                  <D.Medium14>경상남도 산청군 | 시골농가주택</D.Medium14>
                  <D.Medium14>대 661m²(200평) 건 99㎡(30평)</D.Medium14>
                </D.Info>
              </D.Header>

              <D.Detail>
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'현전세금'} content={'9,000만원'} />
                <DetailItem title={'편의시설/교육시설'} content={'도보 5분 이내 편의점, 마트'} />
                <DetailItem title={'옵션'} content={'붙박이장, 에어컨 1대, 전자레인지, 냉장고, 세탁기'} />
              </D.Detail>

              <D.Detail>
                <D.Semibold14>기타 정보</D.Semibold14>
                <D.Regular14 style={{ whiteSpace: 'pre-line' }}>{detailText}</D.Regular14>
              </D.Detail>

              <D.Detail>
                <D.Semibold14>연락처</D.Semibold14>
                <D.Regular14>010-1234-5678</D.Regular14>
              </D.Detail>
            </D.SheetContent>
          </D.SheetScroll>
        </D.Sheet>
      </AnimatePresence>
    </D.DetailPage>
  );
};

export default DetailPage;
