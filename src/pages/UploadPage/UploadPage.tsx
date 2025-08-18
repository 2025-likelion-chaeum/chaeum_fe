import * as U from './UploadPage.styles';
import close from '@assets/icon-close.svg';
import search from '@assets/icon-search-20.svg';
import CheckItem from './components/CheckItem/CheckItem';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
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
  const [titleInput, setTitleInput] = useState<string>('');
  const [priceInput, setPriceInput] = useState<string>('');
  const [sizeInput, setSizeInput] = useState<string>('');
  const [depositInput, setDepositInput] = useState<string>('');
  const [monthPriceInput, setMonthPriceInput] = useState<string>('');
  const [dateInput, setDateInput] = useState<string>('');
  const [roomInput, setRoomInput] = useState<string>('');
  const [directionInpit, setDirectionInput] = useState<string>('');
  const [carInput, setCarInput] = useState<string>('');
  const [hittingInput, setHittingInput] = useState<string>('');
  const [trafficInput, setTrafficInput] = useState<string>('');
  const [convenienceInput, setConvenienceInput] = useState<string>('');
  const [optionInput, setOptionInput] = useState<string>('');
  const [additionalInput, setAdditionalInput] = useState<string>('');

  return (
    <>
      <U.UploadPage>
        <U.Header>
          <U.ProgressBarWrapper>
            <U.Progress progress={progress} />
          </U.ProgressBarWrapper>
          <img src={close} />
        </U.Header>
        {state === 1 && (
          <>
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
            <U.ButtonWrapper>
              <Button
                text="다음"
                onClick={() => {
                  setState(2);
                }}
                type="submit"
                disabled={!selectedMethod || !selectedCategory}
              />
            </U.ButtonWrapper>
          </>
        )}

        {state === 2 && (
          <>
            <U.Group>
              <U.Bold18>빈집의 핵심 정보를 입력해주세요</U.Bold18>
            </U.Group>

            <U.Group>
              <U.Semibold16>제목</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="빈집을 소개해주세요 (3~10자)"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>보증금/임대료</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="금액을 작성해주세요"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>면적</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="평수를 작성해주세요"
                value={sizeInput}
                onChange={(e) => setSizeInput(e.target.value)}
              />
            </U.Group>

            <U.Group>
              <U.Semibold16>빈집 사진</U.Semibold16>
            </U.Group>

            <U.ButtonWrapper>
              <Button
                text="다음"
                onClick={() => {
                  setState(3);
                }}
                type="submit"
                disabled={!selectedMethod || !selectedCategory}
              />
            </U.ButtonWrapper>
          </>
        )}

        {state === 3 && (
          <>
            <U.Group>
              <U.Bold18>세부 조건과 옵션을 알려주세요</U.Bold18>
              <U.Medium12>* 아래 내용은 필수가 아닙니다.</U.Medium12>
            </U.Group>

            <U.Group>
              <U.Semibold16>현전세금</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="전세금을 입력해주세요"
                value={depositInput}
                onChange={(e) => setDepositInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>현보증금/현월세</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="보증금과 월세를 작성해주세요"
                value={monthPriceInput}
                onChange={(e) => setMonthPriceInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>입주가능일</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="입주 가능한 날짜를 작성해주세요"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>방수/욕실수</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="방과 욕실 개수를 작성해주세요"
                value={roomInput}
                onChange={(e) => setRoomInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>방향</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="방의 방향을 입력해주세요 (예: 남향)"
                value={directionInpit}
                onChange={(e) => setDirectionInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>주차대수</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="주차 가능한 차량 수를 입력해주세요"
                value={carInput}
                onChange={(e) => setCarInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>난방형태</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="난방 방식을 입력해주세요 (예: 개별난방)"
                value={hittingInput}
                onChange={(e) => setHittingInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>교통</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="주변 교통편을 입력해주세요"
                value={trafficInput}
                onChange={(e) => setTrafficInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>편의시설/교육시설</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="주변 시설 정보를 입력해주세요"
                value={convenienceInput}
                onChange={(e) => setConvenienceInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>옵션</U.Semibold16>
              <Input
                mode="controlled"
                type="string"
                placeholder="제공되는 옵션을 입력해주세요"
                value={optionInput}
                onChange={(e) => setOptionInput(e.target.value)}
              />
            </U.Group>
            <U.Group>
              <U.Semibold16>기타 정보</U.Semibold16>
              <U.Medium12>임대 물건, 임대 조건, 특이사항, 제한사항 등 자유롭게 작성해주세요.</U.Medium12>
              <Input
                mode="controlled"
                type="string"
                placeholder="추가로 안내할 내용을 입력해주세요"
                value={additionalInput}
                onChange={(e) => setAdditionalInput(e.target.value)}
              />
            </U.Group>

            <U.ButtonWrapper>
              <Button
                text="다음"
                onClick={() => {
                  setState(3);
                }}
                type="submit"
                disabled={!selectedMethod || !selectedCategory}
              />
            </U.ButtonWrapper>
          </>
        )}
      </U.UploadPage>
    </>
  );
};

export default UploadPage;
