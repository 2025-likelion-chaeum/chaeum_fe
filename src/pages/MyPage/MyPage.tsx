import * as M from './MapPage.styles';
import Profile from '@assets/icon-profile-56.svg?react';
import Arrow from '@assets/icon-arrow-right.svg?react';

const MyPage = () => {
  return (
    <M.MyPage>
      <M.Section>
        <M.Menu>계정 정보</M.Menu>
        <M.Wrapper $pTop={16} $gap={true}>
          <Profile />
          <M.Info>
            <M.SemiBold>김멋사</M.SemiBold>
            <M.Email>likelion@naver.com</M.Email>
          </M.Info>
        </M.Wrapper>
      </M.Section>

      <M.Section>
        <M.Menu>빈집 목록</M.Menu>

        <M.Wrapper $pTop={12} $height={56}>
          <M.SemiBold>내가 등록한 빈집</M.SemiBold>
          <Arrow />
        </M.Wrapper>

        <M.Wrapper $pTop={12} $height={56}>
          <M.SemiBold>내가 스크랩한 빈집</M.SemiBold>
          <Arrow />
        </M.Wrapper>
      </M.Section>
    </M.MyPage>
  );
};

export default MyPage;
