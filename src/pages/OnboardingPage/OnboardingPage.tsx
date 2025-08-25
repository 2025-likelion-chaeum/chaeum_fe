import Topbar from '@/components/Topbar/Topbar';
import * as O from './OnboardingPage.styles';
import Button from '@/components/Button/Button';
import z from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { postOnboarding } from '@/apis/Onboarding/Onboarding';

const OnboardingPage = () => {
  const navigate = useNavigate();

  const data = useLocation();
  const email = data.state;

  const schema = z.object({
    purpose: z.enum(['BUY', 'SELL', 'BOTH']),
    usagePurpose: z.array(z.string()),
    ETC: z.string().optional(),
    additionDetail: z.string().optional(),
  });

  type FormFields = z.infer<typeof schema>;

  const { register, handleSubmit, watch, setValue } = useForm<FormFields>({
    defaultValues: {
      purpose: undefined,
      usagePurpose: [],
      ETC: '',
      additionDetail: '',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const requestData = {
      email,
      purpose: data.purpose,
      usagePurpose: data.usagePurpose,
      additionalDetail: data.additionDetail,
      usagePurposeEtcDetail: data.ETC,
    };

    try {
      const res = await postOnboarding(requestData);
      console.log(res);

      navigate('/');
    } catch (error) {
      console.error('온보딩 등록 실패', error);
    }
  };

  const watchPurpose = watch('purpose');
  const watchUtilize = watch('usagePurpose');
  const isEtcChecked = watchUtilize.includes('ETC');

  const utilizeList = [
    {
      id: 'BUSINESS',
      label: '창업 공간 (카페, 편집숍 등)',
    },
    {
      id: 'STUDIO',
      label: '작업실 / 창작공간 (예술, 디자인, 공방 등)',
    },
    {
      id: 'RESIDENTIAL',
      label: '거주 목적 (자취, 셰어하우스, 단기거주 등)',
    },
    {
      id: 'CAFE_OR_MEETING',
      label: '커뮤니티 / 모임 공간 (스터디룸, 마을 회의 등)',
    },
    {
      id: 'INVESTMENT',
      label: '리모델링 후 재임대 / 투자 목적',
    },
    {
      id: 'STORAGE',
      label: '창고 / 물료 / 보관 공간',
    },
    {
      id: 'COMMUNITY',
      label: '텃밭 / 마을활동 등 지역재생 목적',
    },
  ];

  return (
    <>
      <Topbar style="none" />

      <form>
        <O.OnboardingPage>
          <O.Section>
            <O.Title>서비스를 이용하려는 주 목적이 무엇인가요?</O.Title>
            <O.Label htmlFor="buy">
              <O.RadioInput type="radio" value="BUY" id="buy" {...register('purpose')} />
              빈집을 구매하기 위해
            </O.Label>

            <O.Label htmlFor="sell">
              <O.RadioInput type="radio" value="SELL" id="sell" {...register('purpose')} />
              빈집을 판매하기 위해
            </O.Label>

            <O.Label htmlFor="both">
              <O.RadioInput type="radio" value="BOTH" id="both" {...register('purpose')} />
              구매와 판매
            </O.Label>
          </O.Section>

          {watchPurpose && (
            <>
              <O.Section>
                <O.Title>이 빈집을 어떤 목적으로 활용하고 싶으신가요?</O.Title>
                <O.Explain>* 복수 선택 가능</O.Explain>

                {utilizeList.map((item) => (
                  <O.Label htmlFor={item.id} key={item.id}>
                    <O.RadioInput type="checkbox" value={item.id} id={item.id} {...register('usagePurpose')} />
                    {item.label}
                  </O.Label>
                ))}

                <O.EtcWrapper>
                  <O.Label htmlFor="ETC">
                    <O.RadioInput type="checkbox" value="ETC" id="ETC" {...register('usagePurpose')} />
                    기타
                  </O.Label>
                  <O.UserInput
                    placeholder="저만의 희망사항이 있어요"
                    $margin={24}
                    {...register('ETC')}
                    onFocus={() => {
                      if (!isEtcChecked) {
                        setValue('usagePurpose', [...watchUtilize, 'ETC'], { shouldValidate: true });
                      }
                    }}
                  />
                </O.EtcWrapper>
              </O.Section>

              <O.Section>
                <O.Title>빈집을 활용하려는 목적이 무엇인가요?</O.Title>
                <O.Explain>활용 목적이나 업종 등을 알려주면 그에 맞춰 빈집을 추천해드려요!</O.Explain>
                <O.UserInput
                  placeholder={`카페, 편집숍, 예술, 공방 등 자유롭게 작성해주세요.\n1인 거주나 반려동물 동반 등 디테일한 조건을 추가해도 좋아요!`}
                  $height={127}
                  {...register('additionDetail')}
                />
              </O.Section>
            </>
          )}

          <O.ButtonWrapper>
            <Button
              text="시작하기"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={!watchPurpose || watchUtilize.length === 0}
            />
          </O.ButtonWrapper>
        </O.OnboardingPage>
      </form>
    </>
  );
};

export default OnboardingPage;
