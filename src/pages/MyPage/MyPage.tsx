import { useNavigate } from 'react-router-dom';

import * as M from './MyPage.styles';
import Profile from '@assets/icon-profile-56.svg?react';
import Arrow from '@assets/icon-arrow-right.svg?react';

const MyPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (url: string, text?: string) => {
    navigate(url, {
      state: {
        text,
      },
    });
  };

  return (
    <M.MyPage>
      <M.Section>
        <M.Menu>계정 정보</M.Menu>
        <M.Wrapper onClick={() => handleNavigate('/mypage/account')} $pTop={16} $gap={true}>
          <Profile />
          <M.Info>
            <M.SemiBold>김멋사</M.SemiBold>
            <M.Email>likelion@naver.com</M.Email>
          </M.Info>
        </M.Wrapper>
      </M.Section>

      <M.Section>
        <M.Menu>빈집 목록</M.Menu>

        <M.Wrapper onClick={() => handleNavigate('/list', '내가 등록한 빈집')} $pTop={12} $height={56}>
          <M.SemiBold>내가 등록한 빈집</M.SemiBold>
          <Arrow />
        </M.Wrapper>

        <M.Wrapper onClick={() => handleNavigate('/list', '내가 스크랩한 빈집')} $pTop={12} $height={56}>
          <M.SemiBold>내가 스크랩한 빈집</M.SemiBold>
          <Arrow />
        </M.Wrapper>
      </M.Section>
    </M.MyPage>
  );
};

export default MyPage;
