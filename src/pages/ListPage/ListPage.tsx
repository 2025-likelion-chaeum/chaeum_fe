import { useLocation } from 'react-router-dom';

import * as L from './ListPage.styles';
import Topbar from '@/components/Topbar/Topbar';

/**
 * Topbar에 들어가는 제목 내용이 계속 바뀌므로,
 * state의 text 값을 받아서 표시할 수 있게 구현해 두었습니다.
 *
 * useNavigate로 이동시 navigate('/list', { state: { text: "Topbar에 들어갈 내용" } })
 * 다음과 같은 방식으로 넘겨주세요.
 *
 * @author 김진효
 * **/

const ListPage = () => {
  const location = useLocation();

  return (
    <>
      <Topbar text={`${location.state.text}`} style="none" />
      <L.ListPage></L.ListPage>
    </>
  );
};

export default ListPage;
