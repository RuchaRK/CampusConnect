import { PageWrapper } from './Components/PageWrapper';
import { Route, Routes } from 'react-router-dom';
import { routeName } from './App.routes';
import { Teachers } from './Features/Teachers/Teachers';
import { Students } from './Features/Students/Students';
import { Dashboard } from './Features/Dashboard/Dashboard';

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path={routeName.DashBoard} element={<Dashboard />} />
        <Route path={routeName.STUDENT} element={<Students />} />
        <Route path={routeName.TEACHER} element={<Teachers />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
