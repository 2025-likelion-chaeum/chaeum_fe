import Topbar from '@/components/Topbar/Topbar';
import * as O from './OnboardingPage.styles';
import Button from '@/components/Button/Button';
import z from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const navigate = useNavigate();

  const schema = z.object({
    purpose: z.enum(['buy', 'sell', 'both']),
    utilize: z.array(z.string()),
    etcText: z.string().optional(),
    detailPurpose: z.string().optional(),
  });

  type FormFields = z.infer<typeof schema>;

  const { register, handleSubmit, watch, setValue } = useForm<FormFields>({
    defaultValues: {
      purpose: undefined,
      utilize: [],
      etcText: '',
      detailPurpose: '',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    navigate('/');
  };

  const watchPurpose = watch('purpose');
  const watchUtilize = watch('utilize');
  const isEtcChecked = watchUtilize.includes('etc');

  const utilizeList = [
    {
      id: 'startup',
      label: '창업 공간 (카페, 편집숍 등)',
    },
    {
      id: 'workroom',
      label: '작업실 / 창작공간 (예술, 디자인, 공방 등)',
    },
    {
      id: 'living',
      label: '거주 목적 (자취, 셰어하우스, 단기거주 등)',
    },
    {
      id: 'community',
      label: '커뮤니티 / 모임 공간 (스터디룸, 마을 회의 등)',
    },
    {
      id: 'remodeling',
      label: '리모델링 후 재임대 / 투자 목적',
    },
    {
      id: 'storage',
      label: '창고 / 물료 / 보관 공간',
    },
    {
      id: 'region',
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
              <O.RadioInput type="radio" value="buy" id="buy" {...register('purpose')} />
              빈집을 구매하기 위해
            </O.Label>

            <O.Label htmlFor="sell">
              <O.RadioInput type="radio" value="sell" id="sell" {...register('purpose')} />
              빈집을 판매하기 위해
            </O.Label>

            <O.Label htmlFor="both">
              <O.RadioInput type="radio" value="both" id="both" {...register('purpose')} />
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
                    <O.RadioInput type="checkbox" value={item.id} id={item.id} {...register('utilize')} />
                    {item.label}
                  </O.Label>
                ))}

                <O.EtcWrapper>
                  <O.Label htmlFor="etc">
                    <O.RadioInput type="checkbox" value="etc" id="etc" {...register('utilize')} />
                    기타
                  </O.Label>
                  <O.UserInput
                    placeholder="저만의 희망사항이 있어요"
                    $margin={24}
                    {...register('etcText')}
                    onFocus={() => {
                      if (!isEtcChecked) {
                        setValue('utilize', [...watchUtilize, 'etc'], { shouldValidate: true });
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
                  {...register('detailPurpose')}
                />
              </O.Section>
            </>
          )}

          <O.ButtonWrapper>
            <Button
              text="시작하기"
              onClick={handleSubmit(onSubmit)}
              type="submit"
              disabled={!watchPurpose || watchUtilize.length === 0}
            />
          </O.ButtonWrapper>
        </O.OnboardingPage>
      </form>
    </>
  );
};

export default OnboardingPage;
