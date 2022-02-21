import { Route, Routes } from 'react-router-dom';
import Todolist from './Todolist';

function Cola() {
  return (
    <Routes>
      <Route index element={<Todolist />} />
      <Route path="todo" element={<Todolist />} />
    </Routes>
  );
}

export default Cola;
