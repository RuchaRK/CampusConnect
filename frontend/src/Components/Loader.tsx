import styled from '@emotion/styled';

const LoaderStyles = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;

export const Loader = () => {
  return <LoaderStyles>Loading Data...</LoaderStyles>;
};
