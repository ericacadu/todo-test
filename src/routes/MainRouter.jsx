import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from '../components/Welcome';
import Layout from '../components/Layout/Layout';
import Cola from '../pages/Cola';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />

        <Route path="cola/*" element={<Cola />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
