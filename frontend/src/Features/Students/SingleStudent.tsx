import styled from '@emotion/styled';
import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router';
import { KeyValuePair } from '../../Components/KeyValuePair';

const MainContainer = styled.div`
  display: flex;
  padding: 36px 0;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  padding: 29px 55px;
  font-style: normal;
  font-weight: 600;
  align-self: center;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  padding: 29px 66px;
`;

export const SingleStudent = () => {
  const { id } = useParams();
  const [singleStudent, setSingleStudent] = React.useState(null);

  const fetchAStudent = async (id) => {
    const response = await axios.get(`/api/students/${id}`);
    return setSingleStudent(response.data?.studentDetails);
  };

  React.useEffect(() => {
    fetchAStudent(id);
  }, []);

  return (
    <MainContainer>
      <Title>
        <h2>{singleStudent?.name}</h2>
      </Title>
      <DataContainer>
        <KeyValuePair keyText={'Age'} valueText={singleStudent?.age} />
        <KeyValuePair keyText={'Grade'} valueText={singleStudent?.grade} />
        <KeyValuePair keyText={'Gender'} valueText={singleStudent?.gender} />
        <KeyValuePair keyText={'Attendance'} valueText={singleStudent?.attendance} />
        <KeyValuePair keyText={'Percentage'} valueText={singleStudent?.percentage} />
      </DataContainer>
    </MainContainer>
  );
};
