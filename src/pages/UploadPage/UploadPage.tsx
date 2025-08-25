import * as U from './UploadPage.styles';
import close from '@assets/icon-close.svg';
import camera from '@assets/icon-camera.svg';
import search from '@assets/icon-search-20.svg';
import remove from '@assets/icon-removePhoto.svg';
import CheckItem from './components/CheckItem/CheckItem';
import Toast from './components/Toast/Toast';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { RegisterHome } from '@/apis/Register/register';
import type { RequestRegisterDto } from '@/types/Register/register';
import type { RequestRegisterImagesDto } from '@/types/Register/registerImage';
import { useNavigate } from 'react-router-dom';

type AddressData = {
  zonecode: string; // 우편번호
  address: string; // 도로명 주소
  jibunAddress: string; // 지번 주소
};

const UploadPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<number>(1);
  const progress = Math.floor((state / 3) * 100);
  const [addressModal, setAddressModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
    const AddFiles = Array.from(e.target.files);

    const availableAddImages = 5 - houseImages.length;

    if (availableAddImages <= 0) {
      setToast('사진은 최대 5장까지 업로드 가능합니다.');
      e.target.value = '';
      return;
    }

    const allowedFiles = newFiles.slice(0, availableAddImages);

    if (newFiles.length > availableAddImages) {
      setToast('사진은 최대 5장까지만 업로드됩니다.');
    }

    setHouseImages((prev) => [...prev, ...allowedFiles]);
    setSendingImages((prev) => [...prev, ...AddFiles]);
    e.target.value = '';
  };

  const handleRemove = (idx: number) => {
    setHouseImages((prev) => prev.filter((_, i) => i !== idx));
    setSendingImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const completeHandler = (data: AddressData) => {
    setAddress(data);
    setAddressModal(false);
  };

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

  const [address, setAddress] = useState<AddressData | null>(null);
  const [dealType, setDealType] = useState<string | null>(null);
  const [saleType, setSaleType] = useState<string | null>(null);
  const [houseImages, setHouseImages] = useState<string[]>([]);
  const [sendingImages, setSendingImages] = useState<File[]>([]);
  const [title, setTitle] = useState<string>('');
  const [depositRent, setDepositRent] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [currentJeonse, setCurrentJeonse] = useState<string>('');
  const [currentDepositRent, setCurrentDepositRent] = useState<string>('');
  const [moveInAvailableDate, setMoveInAvailableDate] = useState<string>('');
  const [roomCount, setRoomCount] = useState<string>('');
  const [direction, setDirectiion] = useState<string>('');
  const [parkingSpace, setParkingSpace] = useState<string>('');
  const [heatingType, setHeatingType] = useState<string>('');
  const [transportation, setTransportation] = useState<string>('');
  const [facilities, setFacilities] = useState<string>('');
  const [options, setOptions] = useState<string>('');
  const [etc, setEtc] = useState<string>('');

  const SALE_TYPE_MAP: Record<string, string> = {
    시골농가주택: 'RURAL_FARM_HOUSE',
    전원주택: 'COUNTRY_HOUSE',
    조립식주택: 'PREFAB_HOUSE',
    '토지/임야': 'LAND',
    '아파트/빌라': 'APARTMENT_VILLA',
    '과수원/농장': 'ORCHARD_FARM',
    '민박펜션/체험농장': 'GUESTHOUSE_FARMSTAY',
    '공장/창고': 'FACTORY_WAREHOUSE',
  };

  const DEAL_TYPE_MAP: Record<string, string> = {
    매매: 'SALE',
    임대: 'RENTAL',
    전세: 'JEONSE',
    월세: 'MONTHLYRENT',
    단기: 'SHORTTERM',
  };

  const handleRegister = async () => {
    try {
      const mappedSaleType = dealType ? SALE_TYPE_MAP[dealType] : '';
      const mappedDealType = saleType ? DEAL_TYPE_MAP[saleType] : '';

      const requestData: RequestRegisterDto = {
        address: address?.address ?? '',
        dealType: mappedDealType,
        saleType: mappedSaleType,
        imageUrls: [],
        title,
        depositRent: depositRent,
        area: area,
        currentJeonse: currentJeonse ? currentJeonse : null,
        currentDepositRent: currentDepositRent ? currentDepositRent : null,
        moveInAvailableDate: moveInAvailableDate || null,
        roomCount: roomCount ? roomCount : null,
        direction: direction || null,
        parkingSpace: parkingSpace ? parkingSpace : null,
        heatingType: heatingType || null,
        transportation: transportation || null,
        facilities: facilities || null,
        options: options || null,
        etc: etc || null,
      };

      const requestImageData: RequestRegisterImagesDto = { images: sendingImages || null };

      const response = await RegisterHome(requestData, requestImageData);
      console.log('등록 성공:', response.data.id);

      navigate(`/list/${response.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <U.UploadPage>
        <U.Header>
          <U.ProgressBarWrapper>
            <U.Progress progress={progress} />
          </U.ProgressBarWrapper>
          <img src={close} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        </U.Header>
        {state === 1 && (
          <>
            <U.StateContent>
              <U.Group>
                <U.Bold18>빈집의 기본 정보를 입력해주세요</U.Bold18>
                <U.Medium12>* 저희 ‘채움’은 3년 이상 방치된 빈집을 중심으로 다룹니다.</U.Medium12>
              </U.Group>

              <U.Group>
                <U.Semibold16>주소</U.Semibold16>
                {address ? (
                  <U.AddressResult
                    onClick={() => {
                      setAddress(null);
                      setAddressModal(true);
                    }}>
                    <U.Semibold14>{address.zonecode}</U.Semibold14>

                    <U.Regular12>도로명 | {address.address}</U.Regular12>
                    <U.Regular12>구주소 | {address.jibunAddress}</U.Regular12>
                  </U.AddressResult>
                ) : (
                  <U.AddressInput onClick={() => setAddressModal(true)}>
                    {addressModal ? (
                      <DaumPostcode onComplete={completeHandler} />
                    ) : (
                      <>
                        <U.Medium14>주소를 입력해주세요</U.Medium14>
                        <img src={search} />
                      </>
                    )}
                  </U.AddressInput>
                )}
              </U.Group>

              <U.Group>
                <U.Semibold16>매물 종류</U.Semibold16>
                {category.map((item) => (
                  <CheckItem key={item} text={item} checked={dealType === item} onClick={() => setDealType(item)} />
                ))}
              </U.Group>

              <U.Group>
                <U.Semibold16>거래 방식</U.Semibold16>
                {method.map((item) => (
                  <CheckItem key={item} text={item} checked={saleType === item} onClick={() => setSaleType(item)} />
                ))}
              </U.Group>
            </U.StateContent>
            <U.ButtonWrapper>
              <Button
                text="다음"
                onClick={() => {
                  setState(2);
                }}
                type="submit"
                disabled={!address || !saleType || !dealType}
              />
            </U.ButtonWrapper>
          </>
        )}

        {state === 2 && (
          <>
            <U.StateContent>
              <U.Group>
                <U.Bold18>빈집의 핵심 정보를 입력해주세요</U.Bold18>
              </U.Group>

              <U.Group>
                <U.Semibold16>제목</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="빈집을 소개해주세요 (3~10자)"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>보증금/임대료</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="금액을 작성해주세요"
                  value={depositRent}
                  onChange={(e) => setDepositRent(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>면적</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="평수를 작성해주세요"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </U.Group>

              <U.Group>
                <U.Semibold16>빈집 사진</U.Semibold16>
                <U.PhotoGroup>
                  <U.UploadPhoto htmlFor="photo">
                    <img src={camera} />
                    <input
                      type="file"
                      id="photo"
                      style={{ display: 'none' }}
                      accept="image/*"
                      multiple
                      onChange={handleChange}
                    />
                  </U.UploadPhoto>
                  {houseImages.map((photo, idx) => (
                    <U.PhotoWrapper key={idx}>
                      <U.Photo src={photo} />
                      <U.RemovePhoto key={idx} src={remove} onClick={() => handleRemove(idx)} />
                    </U.PhotoWrapper>
                  ))}
                </U.PhotoGroup>
              </U.Group>
            </U.StateContent>

            <U.ButtonWrapper>
              <Button
                text="다음"
                onClick={() => {
                  setState(3);
                }}
                type="submit"
                disabled={!title || !depositRent || !area || houseImages.length === 0}
              />
            </U.ButtonWrapper>
          </>
        )}

        {state === 3 && (
          <>
            <U.StateContent>
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
                  value={currentJeonse}
                  onChange={(e) => setCurrentJeonse(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>현보증금/현월세</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="보증금과 월세를 작성해주세요"
                  value={currentDepositRent}
                  onChange={(e) => setCurrentDepositRent(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>입주가능일</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="입주 가능한 날짜를 작성해주세요"
                  value={moveInAvailableDate}
                  onChange={(e) => setMoveInAvailableDate(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>방수/욕실수</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="방과 욕실 개수를 작성해주세요"
                  value={roomCount}
                  onChange={(e) => setRoomCount(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>방향</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="방의 방향을 입력해주세요 (예: 남향)"
                  value={direction}
                  onChange={(e) => setDirectiion(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>주차대수</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="주차 가능한 차량 수를 입력해주세요"
                  value={parkingSpace}
                  onChange={(e) => setParkingSpace(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>난방형태</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="난방 방식을 입력해주세요 (예: 개별난방)"
                  value={heatingType}
                  onChange={(e) => setHeatingType(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>교통</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="주변 교통편을 입력해주세요"
                  value={transportation}
                  onChange={(e) => setTransportation(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>편의시설/교육시설</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="주변 시설 정보를 입력해주세요"
                  value={facilities}
                  onChange={(e) => setFacilities(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>옵션</U.Semibold16>
                <Input
                  mode="controlled"
                  type="string"
                  placeholder="제공되는 옵션을 입력해주세요"
                  value={options}
                  onChange={(e) => setOptions(e.target.value)}
                />
              </U.Group>
              <U.Group>
                <U.Semibold16>기타 정보</U.Semibold16>
                <U.Medium12>임대 물건, 임대 조건, 특이사항, 제한사항 등 자유롭게 작성해주세요.</U.Medium12>

                <U.Textarea
                  placeholder="추가로 안내할 내용을 입력해주세요"
                  value={etc}
                  onChange={(e) => setEtc(e.target.value)}
                />
              </U.Group>
            </U.StateContent>

            <U.ButtonWrapper>
              <Button
                text="등록하기"
                onClick={() => {
                  handleRegister();
                }}
                type="submit"
              />
            </U.ButtonWrapper>
          </>
        )}
      </U.UploadPage>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
};

export default UploadPage;
