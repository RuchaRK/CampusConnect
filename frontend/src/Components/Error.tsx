import styled from '@emotion/styled';

const ErrorStyled = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;

export const Error = ({ text = 'Something went wrong' }) => {
  return <ErrorStyled>{text}</ErrorStyled>;
};
