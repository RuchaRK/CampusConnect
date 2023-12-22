import * as React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Error } from '../../Components/Error';
import { ListPage } from '../../Components/ListPage';
import { Loader } from '../../Components/Loader';
import { addStudent, deleteStudent, fetchStudents } from '../../Reducer/studentSlice';
import { EditStudent } from './EditStudent';
import { StudentModal } from './StudentModal';
import styled from '@emotion/styled';

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  & + & {
    margin-left: 16px;
  }
`;

export const Students = () => {
  const dispatch = useDispatch();
  const [sortDirection, setSortDirection] = React.useState({});
  const [sortBy, setSortBy] = React.useState();
  const [genderFilter, setGenderFilter] = React.useState('all');
  const [selectedGrade, setSelectedGrade] = React.useState('all');
  const { status, error, students, wizardStatus } = useSelector((state) => state.students);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addNewStudent = (studentData) => {
    dispatch(addStudent(studentData));
  };

  const deleteStudentById = (id) => {
    dispatch(deleteStudent(id));
  };

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  console.log('Sort by', sortBy);
  console.log('Sort direction', sortDirection);

  const sortedStudents = sortBy
    ? [...students].sort((a, b) => {
        if (sortBy === 'name') {
          if (sortDirection.name === 'asc') {
            return a.name - b.name ? 1 : -1;
          } else {
            return a.name - b.name ? -1 : 1;
          }
        } else {
          if (sortDirection[sortBy] === 'asc') {
            return a[sortBy] - b[sortBy];
          } else {
            return b[sortBy] - a[sortBy];
          }
        }
      })
    : students;

  const filteredData = sortedStudents
    .filter((student) => (genderFilter === 'all' ? true : student.gender === genderFilter))
    .filter((student) => (selectedGrade === 'all' ? true : student.grade == selectedGrade));
  console.log('filteredData', filteredData);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Something is wrong {error}</p>}

      <div>
        <ListPage
          column={[
            {
              name: 'Name',
              isSortable: true,
              sortDirection: sortDirection.name,
              onClick: () => {
                setSortBy('name');
                setSortDirection({
                  ...sortDirection,
                  name: sortDirection.name === 'asc' ? 'desc' : 'asc'
                });
              }
            },
            {
              name: 'Age',
              isSortable: true,
              sortDirection: sortDirection.age,
              onClick: () => {
                setSortBy('age');
                setSortDirection({
                  ...sortDirection,
                  age: sortDirection.age === 'asc' ? 'desc' : 'asc'
                });
              }
            },
            {
              name: 'Grade',
              isSortable: true,
              sortDirection: sortDirection.grade,
              onClick: () => {
                setSortBy('grade');
                setSortDirection({
                  ...sortDirection,
                  grade: sortDirection.grade === 'asc' ? 'desc' : 'asc'
                });
              }
            },
            {
              name: 'Percentage',
              isSortable: true,
              sortDirection: sortDirection.percentage,
              onClick: () => {
                setSortBy('percentage');
                setSortDirection({
                  ...sortDirection,
                  percentage: sortDirection.percentage === 'asc' ? 'desc' : 'asc'
                });
              }
            }
          ]}
          data={filteredData.map((student) => [
            <Link to={student._id}>{student.name}</Link>,
            student.age,
            student.grade,
            student.percentage,
            <EditStudent key={student._id} objectToShow={student} />,
            <button key={student._id} onClick={() => deleteStudentById(student._id)}>
              <AiOutlineDelete />
            </button>
          ])}
          filter={
            <>
              <FilterContainer>
                <h4>Grade </h4>
                <select name="grade" onChange={(event) => setSelectedGrade(event.target.value)}>
                  <option value="all">All</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
                    <option value={i}>{i}</option>
                  ))}
                </select>
              </FilterContainer>
              <FilterContainer>
                <h4>Gender </h4>
                <select name="gender" onChange={(event) => setGenderFilter(event.target.value)}>
                  <option value="all"> All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </FilterContainer>
            </>
          }
          title="Students"
          description=""
          image=""
          openForm={openModal}
        />
        <StudentModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={addNewStudent}
        />
      </div>
    </div>
  );
};
