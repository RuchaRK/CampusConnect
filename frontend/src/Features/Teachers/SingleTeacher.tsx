import styled from '@emotion/styled';
import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router';
import { KeyValuePair } from '../../Components/KeyValuePair';
import { useSelector } from 'react-redux';

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

export const SingleTeacher = () => {
  const { id } = useParams();
  const [singleTeacher, setSingleTeacher] = React.useState(null);

  const fetchATeacher = async (id) => {
    const response = await axios.get(`/api/teachers/${id}`);
    return setSingleTeacher(response.data?.teacher);
  };

  React.useEffect(() => {
    fetchATeacher(id);
  }, []);

  console.log('Teacher to see', singleTeacher);

  return (
    <MainContainer>
      <Title>
        <h2>{singleTeacher?.name}</h2>
      </Title>
      <DataContainer>
        <KeyValuePair keyText={'Subject'} valueText={singleTeacher?.subject} />
        <KeyValuePair keyText={'Address'} valueText={singleTeacher?.address} />
        <KeyValuePair keyText={'Contact'} valueText={singleTeacher?.contactNumber} />
      </DataContainer>
    </MainContainer>
  );
};
