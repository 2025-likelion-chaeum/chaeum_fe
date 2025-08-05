import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Topbar from '@/components/Topbar/Topbar';
import BookMarkOff from '@assets/icon-bookmark-black-off.svg';
import BookMarkOn from '@assets/icon-bookmark-black-on.svg';
import BookMarkWhiteOff from '@assets/icon-bookmark-white-off.svg';
import BookMarkWhiteOn from '@assets/icon-bookmark-white-on.svg';

import { useState } from 'react';

const TestPage = () => {
  const [input, setInput] = useState<string>('');
  const [priceInput, setPriceInput] = useState<string>('');

  const [bookMarkClicked, setBookMarkClicked] = useState<boolean>(false);
  const [bookMarkClicked2, setBookMarkClicked2] = useState<boolean>(false);

  const text = '서울';

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '30px' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>⭐️TestPage⭐️</div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        ✔️ Input
        <Input
          mode="controlled"
          placeholder="빈집을 소개해주세요 (3~10자)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={() => {}}
          maxLength={10}
          minLength={3}
        />
        <Input
          mode="controlled"
          type="string"
          placeholder="금액을 작성해주세요"
          value={priceInput}
          onChange={(e) => setPriceInput(e.target.value)}
        />
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        ✔️ button
        {/* 빈집 소개 input에 값이 입력되어야 활성화 */}
        <Button text="빈집 소개 input 입력시 활성화" onClick={() => {}} type="submit" disabled={!input.trim()} />
        {/* 빈집 소개 iput, 금액 input 둘 다 값이 입력되어야 활성화 */}
        <Button
          text="둘 다 작성시 활성화"
          onClick={() => {}}
          type="submit"
          disabled={!priceInput.trim() || !input.trim()}
        />
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        ✔️ Topbar
        <Topbar text="회원가입" style="none" />
        <Topbar style="none" />
        <Topbar text="전국의 빈집들" style="border" />
        <Topbar text={`${text}의 빈집들`} style="border" />
        <Topbar
          text="{빈집 제목 ex.농가주택 매매}"
          style="gradient"
          icon={bookMarkClicked ? BookMarkWhiteOn : BookMarkWhiteOff}
          onClickIcon={() => setBookMarkClicked((prev) => !prev)}
        />
        <Topbar
          text="{빈집 제목 ex.농가주택 매매}"
          style="border"
          icon={bookMarkClicked2 ? BookMarkOn : BookMarkOff}
          onClickIcon={() => setBookMarkClicked2((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default TestPage;
