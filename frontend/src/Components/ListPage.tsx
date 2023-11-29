import styled from '@emotion/styled';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
  align-items: flex-start;
  height: 100%;
`;

const FirstSection = styled.div(
  ({ img }) => `
  position: relative;
  height: 160px;
  width: 100%;
  border-radius: 12px;
  background-image:   linear-gradient(141deg, #EB5231 -29.15%, #571FCF 151.64%), url(${img});
  display: flex;
  justify-content: space-between;
  padding: 4px 32px;
`
);

const HeaderTextContainer = styled.div`
  padding: 28px 0px;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 16px;
`;

const SecondSection = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0px 16px;
`;

const HeaderRow = styled.tr``;

const ColumnHeading = styled.th`
  padding: 16px 16px 0px 16px;
  text-align: left;
`;

const ContentRow = styled.tr`
  background-color: #ffffff;
  border: none;
  outline: none;
`;

const Content = styled.td`
  border: 1px solid #fff;
  padding: 10px 16px;
  outline: none;
`;

const Title = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 800;
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.1px;
`;

const Button = styled.button`
  width: fit-content;
`;

const IconTextContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 8px;
  width: 100%;
`;

export const ListPage = ({ column, data, filter, title, description, image, openForm }) => {
  return (
    <ListContainer>
      <FirstSection img={image}>
        <HeaderTextContainer>
          <div>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </div>

          <Button onClick={openForm}>Add New </Button>
        </HeaderTextContainer>
      </FirstSection>
      <FilterSection> {filter}</FilterSection>
      <SecondSection>
        <Table>
          <HeaderRow>
            {column.map((header) => (
              <ColumnHeading onClick={header.onClick}>
                <IconTextContainer>
                  {header.name}
                  {header.isSortable ? (
                    header.sortDirection === 'asc' ? (
                      <MdOutlineArrowDropUp size={35} />
                    ) : (
                      <MdOutlineArrowDropDown size={35} />
                    )
                  ) : null}
                </IconTextContainer>
              </ColumnHeading>
            ))}
          </HeaderRow>
          {data.map((row) => (
            <ContentRow>
              {row.map((x) => (
                <Content>{x}</Content>
              ))}
            </ContentRow>
          ))}
        </Table>
      </SecondSection>
    </ListContainer>
  );
};
