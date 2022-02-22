import { Route, Routes } from 'react-router-dom';
import TodoList from './_TodoList';

function Cola() {
  return (
    <Routes>
      <Route index element={<TodoList />} />
      <Route path="todo" element={<TodoList />} />
    </Routes>
  );
}

export default Cola;
