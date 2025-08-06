import { useNavigate } from 'react-router-dom';

import * as M from './MyAccountPage.styles';
import Topbar from '@/components/Topbar/Topbar';

const MyAccountPage = () => {
  const navigate = useNavigate();

  const myAccount = [
    {
      label: '이름',
      content: '김멋사',
    },
    {
      label: '휴대전화',
      content: '010-1234-5678',
    },
    {
      label: '이메일',
      content: 'likelion123@naver.com',
    },
  ];

  return (
    <>
      <Topbar text="계정 정보" style="none" />

      <M.MyAccountPage>
        <M.AccountWrapper>
          <M.Section>
            {myAccount.map((menu, idx) => (
              <M.Menu key={menu.label} $idx={idx}>
                <M.Label>{menu.label}</M.Label>
                <M.Content>{menu.content}</M.Content>
              </M.Menu>
            ))}
          </M.Section>
        </M.AccountWrapper>

        <M.ButtonWrapper>
          <M.Button onClick={() => navigate('/login')}>로그아웃</M.Button>
        </M.ButtonWrapper>
      </M.MyAccountPage>
    </>
  );
};
export default MyAccountPage;
