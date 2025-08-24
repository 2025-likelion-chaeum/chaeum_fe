import { useNavigate } from 'react-router-dom';

import * as M from './MyAccountPage.styles';
import Topbar from '@/components/Topbar/Topbar';
import { useEffect, useState } from 'react';

import { getMypage } from '@/apis/Mypage/Mypage';
import type { ResponseMypageDto } from '@/types/Mypage/Mypage';

const MyAccountPage = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ResponseMypageDto['data'] | null>(null);

  const myAccount = [
    {
      label: '이름',
      content: `${profileData?.name}`,
    },
    {
      label: '휴대전화',
      content: `${profileData?.phoneNum}`,
    },
    {
      label: '이메일',
      content: `${profileData?.email}`,
    },
  ];

  useEffect(() => {
    const getMypageData = async () => {
      try {
        const response = await getMypage();
        setProfileData(response.data);
      } catch (error) {
        console.error('계정 정보 조회 실패', error);
      }
    };

    getMypageData();
  }, []);

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
