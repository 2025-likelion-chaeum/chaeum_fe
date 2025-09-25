import { useNavigate } from 'react-router-dom';

import * as T from './Topbar.styles';
import LeftArrow from '@assets/icon-arrow-left.svg?react';

/**
 * Topbar는 다양한 페이지에서 사용되는 컴포넌트입니다.
 *
 * @param {string} text -- 탑바 제목 내용 / 필수 X
 * @param {string} icon -- 우측에 들어갈 아이콘 파일 이름 / 필수 X
 * @param {function} onClickIcon -- 우측 아이콘 클릭시 실행될 함수 / 필수 X
 * @param {'none' | 'border' | 'gradient'} style -- 탑바 스타일
 *   - 'none' : 기본 스타일
 *   - 'border' : 하단에 border 표시
 *   - 'gradient' : 배경이 gradient
 *
 * @param {boolean'} goHome -- navigate시 메인으로 이동할 지 / 필수 X

 * ex) <Topbar text="전국의 빈집들" style="border" />
 *
 * @author 김진효
 * **/

interface TopbarProps {
  text?: string;
  icon?: string;
  onClickIcon?: () => void;
  style: 'none' | 'border' | 'gradient';
  goHome?: boolean;
}

const Topbar = ({ text, icon, onClickIcon, style, goHome }: TopbarProps) => {
  const navigate = useNavigate();

  const handleClickLeftArrow = () => {
    if (goHome) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <T.Topbar $style={style}>
      <LeftArrow onClick={handleClickLeftArrow} />
      <T.Text $style={style}>{text}</T.Text>
      {icon && (
        <T.Icon onClick={onClickIcon}>
          <img src={icon} alt="icon" />
        </T.Icon>
      )}
    </T.Topbar>
  );
};

export default Topbar;
