import * as D from './Dropdown.styles';
import dropdownDown from '@assets/icon-dropdown-12-down.svg';
import dropdownUp from '@assets/icon-dropdown-12-up.svg';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import palette from '@/styles/theme';

/**
 * Dropdown 가장 기본적으로 사용되는 조건 선택 시 사용되는 컴포넌트입니다.
 *
 * @param {string} text -- 드롭다운 내용
 * @param {string} array -- 클릭 시 나오는 항목들
 * @param {function} onSelect -- 항목 선택 시 실행 함수
 * @param {string} selected -- 선택된 항목들 배경색 바꾸기 위해 프롭스 전달
 *
 * ex)<Dropdown text={'매물 종류'} array={category} onSelect={handleSelect} selected={selectedCategories} />
 *
 * @author 정서영
 * **/

interface DropdownProps {
  text: string;
  array: string[];
  onSelect: (item: string) => void;
  selected: string[];
}

const Dropdown = ({ text, array, onSelect, selected }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <D.DropdownContainer>
        <D.Dropdown onClick={() => setIsOpen((prev) => !prev)}>
          <D.Medium14>{text}</D.Medium14>
          <img src={isOpen ? dropdownUp : dropdownDown} />
        </D.Dropdown>
      </D.DropdownContainer>
      <AnimatePresence>
        {isOpen && (
          <>
            <D.Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            {/* 바텀시트 */}
            <D.Sheet
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) {
                  setIsOpen(false);
                }
              }}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              <D.SheetInfo>
                <D.Handle />
                <D.Semibold16>{text}</D.Semibold16>
              </D.SheetInfo>

              {array.map((item, i) => {
                const isSelected = selected.includes(item);
                return (
                  <D.SheetItem
                    key={i}
                    onClick={() => onSelect(item)}
                    style={{
                      backgroundColor: isSelected ? palette.grayscale.eb : 'white',
                    }}>
                    {item}
                  </D.SheetItem>
                );
              })}
            </D.Sheet>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dropdown;
