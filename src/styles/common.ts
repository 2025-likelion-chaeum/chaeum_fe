import styled from '@emotion/styled';

export const Page = styled.div`
  @media (min-width: 768px) {
    width: 360px;
    height: 100dvh;

    margin: 0 auto;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);

    overflow-y: auto;
  }
`;

export const OuletWrapper = styled.div`
  min-height: calc(100dvh - 56px);
`;
