import * as U from './UploadPage.styles';
import close from '@assets/icon-close.svg';
import search from '@assets/icon-search-20.svg';
import CheckItem from './components/CheckItem/CheckItem';
import Button from '@/components/Button/Button';
import { useState } from 'react';

const UploadPage = () => {
  const [state, setState] = useState<number>(1);
  const progress = Math.floor((state / 3) * 100);

  const category = [
    '시골농가주택',
    '전원주택',
    '조립식주택',
    '토지/임야',
    '아파트/빌라',
    '과수원/농장',
    '민박펜션/체험농장',
    '공장/창고',
  ];

  const method = ['매매', '임대', '전세', '월세', '단기'];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <>
      <U.UploadPage>
        <U.Header>
          <U.ProgressBarWrapper>
            <U.Progress progress={progress} />
          </U.ProgressBarWrapper>
          <img src={close} />
        </U.Header>

        <U.Group>
          <U.Bold18>빈집의 기본 정보를 입력해주세요</U.Bold18>
          <U.Medium12>* 저희 ‘채움’은 3년 이상 방치된 빈집을 중심으로 다룹니다.</U.Medium12>
        </U.Group>

        <U.Group>
          <U.Semibold16>주소</U.Semibold16>
          <U.AddressInput>
            <U.Medium14>주소를 입력해주세요</U.Medium14>
            <img src={search} />
          </U.AddressInput>
        </U.Group>

        <U.Group>
          <U.Semibold16>매물 종류</U.Semibold16>
          {category.map((item) => (
            <CheckItem
              key={item}
              text={item}
              checked={selectedCategory === item}
              onClick={() => setSelectedCategory(item)}
            />
          ))}
        </U.Group>

        <U.Group>
          <U.Semibold16>거래 방식</U.Semibold16>
          {method.map((item) => (
            <CheckItem
              key={item}
              text={item}
              checked={selectedMethod === item}
              onClick={() => setSelectedMethod(item)}
            />
          ))}
        </U.Group>
      </U.UploadPage>
      <Button text="다음" onClick={() => {}} type="submit" disabled={!selectedMethod || !selectedCategory} />
    </>
  );
};

export default UploadPage;
