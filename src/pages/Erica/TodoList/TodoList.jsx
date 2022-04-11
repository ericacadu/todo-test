import { Header, TaskItem, Modal } from './components';
import { headerContext, useTodoList, todoContext } from './todoContext';

function TodoList() {
  const { headerContextValue, todoContextValue, modal, filterList } = useTodoList();
  return (
    <>
      <headerContext.Provider value={headerContextValue}>
        <Header />
      </headerContext.Provider>

      <todoContext.Provider value={todoContextValue}>
        <main>
          <ul className="space-y-2 tracking-widest text-slate-500">
            {filterList.map((todo) => (
              <TaskItem todo={todo} key={todo.id} />
            ))}
          </ul>
        </main>
        <Modal modal={modal} />
      </todoContext.Provider>
    </>
  );
}

export default TodoList;
