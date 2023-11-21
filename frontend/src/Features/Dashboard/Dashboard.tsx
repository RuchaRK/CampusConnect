import styled from '@emotion/styled';
import { FaMarker } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { PiStudent } from 'react-icons/pi';
import { TbPercentage } from 'react-icons/tb';
import { fetchStudents } from '../../Reducer/studentSlice';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 32px;
  gap: 24px;
  background: url(/images/school.svg) no-repeat center;
`;

const InfoCard = styled.div`
  display: flex;
  padding: 20px;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 15px;
  background: #fff;
  width: 226px;
  height: 113px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ContentTitle = styled.h5`
  color: #ec2c5a;
`;

export const Dashboard = () => {
  const { students, status } = useSelector((state) => state.students);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  const topper = [...(students ?? [])].sort((s1, s2) => s1.percentage - s2.percentage)[0];

  return (
    <MainContainer>
      <InfoCard>
        <PiStudent size={40} />
        <Content>
          <ContentTitle>Total Students</ContentTitle>
          <h5>{status === 'loading' ? 'loading...' : students.length}</h5>
        </Content>
      </InfoCard>

      <InfoCard>
        <FaMarker size={40} />
        <Content>
          <ContentTitle>Average Attendace</ContentTitle>
          <h5>
            {status === 'loading'
              ? 'loading...'
              : students.reduce((count, student) => (student.attendance ?? 0) + count, 0) /
                students.length}
          </h5>
        </Content>
      </InfoCard>

      <InfoCard>
        <TbPercentage size={40} />
        <Content>
          <ContentTitle>Total Percentage</ContentTitle>
          <h5>
            {status === 'loading'
              ? 'loading...'
              : students.reduce((count, student) => (student.percentage ?? 0) + count, 0) /
                students.length}
          </h5>
        </Content>
      </InfoCard>

      <InfoCard>
        <GiTrophy size={40} />
        <Content>
          <ContentTitle>Topper</ContentTitle>
          <h5>{status === 'loading' ? 'loading...' : topper?.name ?? '--'}</h5>
        </Content>
      </InfoCard>
    </MainContainer>
  );
};
