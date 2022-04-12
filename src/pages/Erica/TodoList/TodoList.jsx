import { todoContext, useTodoList } from './todoContext';
import { Header, TaskList, Modal } from './components';

function TodoList() {
  return (
    <todoContext.Provider value={useTodoList}>
      <Header />
      <TaskList />
      <Modal />
    </todoContext.Provider>
  );
}

export default TodoList;
